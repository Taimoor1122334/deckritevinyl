from io import BytesIO
from pathlib import Path

from PIL import Image, ImageCms

ROOT = Path(r"D:\deckritevinyl\public\gallery\projects")
MAX_EDGE = 2000
QUALITY = 85


def to_srgb(im: Image.Image) -> Image.Image:
    icc = im.info.get("icc_profile")
    if not icc:
        return im.convert("RGB") if im.mode != "RGB" else im
    try:
        src = ImageCms.ImageCmsProfile(BytesIO(icc))
        dst = ImageCms.createProfile("sRGB")
        return ImageCms.profileToProfile(im.convert("RGB"), src, dst, outputMode="RGB")
    except Exception:
        return im.convert("RGB")


def normalize(path: Path) -> None:
    im = Image.open(path)
    raw = path.read_bytes()[:250000]
    has_p3 = b"Display P3" in raw
    print(f"{path.relative_to(ROOT)} {im.format} {im.size} p3={has_p3} kb={path.stat().st_size // 1024}")
    im = to_srgb(im)
    if max(im.size) > MAX_EDGE:
        im.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
    dest = path.with_suffix(".jpg")
    im.save(dest, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    if dest != path:
        path.unlink()
    print(f"  -> {dest.name} {im.size} kb={dest.stat().st_size // 1024}")


if __name__ == "__main__":
    for path in sorted(ROOT.rglob("*")):
        if path.suffix.lower() in {".jpg", ".jpeg", ".png"}:
            normalize(path)
