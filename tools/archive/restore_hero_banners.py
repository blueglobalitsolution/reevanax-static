import shutil
from pathlib import Path

source_banner = Path("assets/uploads/2022/08/header-banner.jpg")
if not source_banner.exists():
    print("Error: header-banner.jpg source not found!")
    exit(1)

missing_banners = [
    "assets/uploads/2025/04/About-Us-1.jpg",
    "assets/uploads/2025/05/Book-Appointment-1.jpg",
    "assets/uploads/2025/04/Anti-agening-Treatment.jpg",
    "assets/uploads/2025/04/1.6-Mummy-Makeover-2.jpg",
    "assets/uploads/2025/04/Male-Aesthetic.jpg",
    "assets/uploads/2025/04/2.2-Vaginoplasty-2.jpg",
    "assets/uploads/2025/05/Body-Fitness-1.jpg",
    "assets/uploads/2025/05/2.3-Blepharoplasty.jpg",
    "assets/uploads/2025/04/1.3-Face-Care-1.jpg",
    "assets/uploads/2025/04/Scar-tattoo-Removal.jpg",
    "assets/uploads/2025/05/1.4-Body-Care.jpg",
    "assets/uploads/2025/11/03-1.jpg",
    "assets/uploads/2025/07/1.3-Face-Care.jpg",
    "assets/uploads/2025/07/2.3-Blepharoplasty.jpg",
    "assets/uploads/2025/05/Body-Fitness.jpg",
    "assets/uploads/2025/04/1.4-Body-Care.jpg",
    "assets/uploads/2025/07/1.6-Mummy-Makeover-1.jpg",
    "assets/uploads/2025/07/Male-Aesthetic.jpg",
    "assets/uploads/2025/04/1.8-Body-Fitness-1.jpg",
    "assets/uploads/2026/01/Banner.jpg",
    "assets/uploads/2025/04/2.3-Blepharoplasty.jpg",
]

restored = 0
for target_rel in missing_banners:
    target = Path(target_rel)
    if not target.exists():
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_banner, target)
        restored += 1
        print(f"  [+] Restored: {target_rel}")

print(f"\nSuccessfully restored {restored} hero banner images across the site!")
