import os
import re

def find_unused_images(project_root, image_dirs, search_dirs):
    image_extensions = ('.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.ico')
    
    # Get all image files
    all_images = []
    for d in image_dirs:
        full_dir = os.path.join(project_root, d)
        if not os.path.exists(full_dir):
            continue
        for root, _, files in os.walk(full_dir):
            for f in files:
                if f.lower().endswith(image_extensions):
                    all_images.append(os.path.join(root, f))
    
    # Get all source files to search in
    source_files = []
    for d in search_dirs:
        full_dir = os.path.join(project_root, d)
        if not os.path.exists(full_dir):
            continue
        for root, _, files in os.walk(full_dir):
            if 'node_modules' in root or 'dist' in root or '.astro' in root:
                continue
            for f in files:
                if f.lower().endswith(('.astro', '.tsx', '.ts', '.js', '.jsx', '.css', '.toml')):
                    source_files.append(os.path.join(root, f))
    
    # Read all source files into a single buffer or search per image
    # For efficiency with many images, searching per source file or loading all source might be better.
    # But let's just search per image for simplicity if the codebase isn't massive.
    
    unused_images = []
    
    # Read all source code content
    source_content = ""
    for sf in source_files:
        try:
            with open(sf, 'r', encoding='utf-8', errors='ignore') as f:
                source_content += f.read() + "\n"
        except Exception as e:
            print(f"Error reading {sf}: {e}")

    for img_path in all_images:
        basename = os.path.basename(img_path)
        # We search for the basename first. 
        # Note: sometimes images are referenced by relative path, e.g. "@/assets/logo.png"
        # Searching for the basename is a good conservative check.
        
        # If the basename is very generic (like "1.png"), it might have false positives.
        # But usually in these setups people use the filename.
        
        if basename not in source_content:
            unused_images.append(img_path)
            
    return unused_images

if __name__ == "__main__":
    root = r"c:\Users\User\Documents\Gravity\qwen3.5\vak-plumbing-main\migration-emdash"
    img_dirs = ["public", "src/assets"]
    search_dirs = ["src", "public", "."] # Search in src, public (for css/etc) and root (for configs)
    
    unused = find_unused_images(root, img_dirs, search_dirs)
    
    print("--- UNUSED IMAGES ---")
    for u in unused:
        print(u)
