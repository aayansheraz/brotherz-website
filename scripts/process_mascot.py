"""Turn the mascot art into a transparent-background PNG for the hero.

Usage: python scripts/process_mascot.py <input-image> [output.png]

Flood-fills near-white background from the image borders (so white details
inside the character — sneakers, palm, logo text — are preserved), erases the
decorative purple corner blobs by only filling regions connected to the border,
then crops to content with a small margin.
"""

import sys
from collections import deque

from PIL import Image

TOLERANCE = 34  # how close to the border color counts as background


def near(c1, c2, tol=TOLERANCE):
    return all(abs(a - b) <= tol for a, b in zip(c1[:3], c2[:3]))


def main():
    src = sys.argv[1]
    dst = sys.argv[2] if len(sys.argv) > 2 else "public/img/mascot.png"

    img = Image.open(src).convert("RGBA")
    w, h = img.size
    px = img.load()

    # collect seed colors from the border (background whites AND corner blobs)
    seeds = deque()
    seen = bytearray(w * h)
    white = (250, 248, 246)

    def try_seed(x, y):
        i = y * w + x
        if not seen[i]:
            seen[i] = 1
            seeds.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)

    # BFS: erase anything connected to the border that is near-white OR
    # near the color of the border pixel it grew from (handles purple blobs)
    q = deque()
    for x, y in seeds:
        q.append((x, y, px[x, y]))

    erased = 0
    while q:
        x, y, region_color = q.popleft()
        c = px[x, y]
        if not (near(c, white) or near(c, region_color)):
            continue
        px[x, y] = (0, 0, 0, 0)
        erased += 1
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                i = ny * w + nx
                if not seen[i]:
                    seen[i] = 1
                    q.append((nx, ny, region_color))

    # soften fringe: fade pixels adjacent to transparency that are still whitish
    bbox = img.getbbox()
    img = img.crop(bbox)
    img.save(dst)
    print(f"erased {erased} px, cropped to {img.size}, saved -> {dst}")


if __name__ == "__main__":
    main()
