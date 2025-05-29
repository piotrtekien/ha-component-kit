from pathlib import Path

# Set root to current directory (src/)
root = Path(__file__).resolve().parent
out_file = root / "all-files.txt"

print("📁 Export Script Started")
print(f"📌 Root directory: {root}")

# Step 1: Delete old file if exists
if out_file.exists():
    print(f"🗑️  Removing existing output file: {out_file}")
    out_file.unlink()
else:
    print(f"🆕 No previous {out_file.name} file found. Creating new one.")

# Step 2: Create new output file
print(f"📝 Creating new file: {out_file.name}\n")

def dump_file(fp, fh):
    try:
        relative_path = fp.relative_to(root)
        print(f"📄 Adding file: {relative_path}")
        with fp.open("r", encoding="utf-8", errors="ignore") as src:
            fh.write(f"\n===== {relative_path} =====\n")
            fh.write(src.read())
            fh.write("\n" + "="*60 + "\n")
    except Exception as exc:
        print(f"⚠️  Skipped {fp.name}: {exc}")

# Step 3: Scan and write files
print("🔍 Scanning files...\n")
file_count = 0

with out_file.open("w", encoding="utf-8") as out:
    for f in sorted(root.rglob("*")):
        if (
            f.is_file()
            and f.name != ".DS_Store"
            and f.name != Path(__file__).name
            and not f.suffix in [".py", ".txt"]
        ):
            dump_file(f, out)
            file_count += 1

# Final summary
print(f"\n✅ Export complete!")
print(f"📦 Total files written: {file_count}")
print(f"📄 Output file created at: {out_file.resolve()}")
