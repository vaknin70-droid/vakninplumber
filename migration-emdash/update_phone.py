import os
import re

files_to_update = [
    "src/pages/AccessibilityStatement.tsx",
    "src/pages/ServicePage.tsx",
    "src/pages/CityPage.tsx",
    "src/pages/tools/CostCalculator.tsx",
    "src/pages/tools/EmergencyChecker.tsx",
    "src/pages/tools/PhotoUploadTool.tsx",
    "src/pages/tools/DiagnosisTool.tsx",
    "src/pages/AllCities.tsx",
    "src/components/Navbar.tsx",
    "src/components/LeadCaptureBlock.tsx",
    "src/components/HeroSection.tsx",
    "src/components/Footer.tsx",
    "src/components/FloatingButtons.tsx",
    "src/components/CTASection.tsx",
    "src/components/ContactSection.tsx"
]

old_number = "501234567"
new_number = "528126653"

for file_path in files_to_update:
    abs_path = os.path.join(r"c:\Users\User\Documents\Gravity\qwen3.5\vak-plumbing-main", file_path)
    if os.path.exists(abs_path):
        with open(abs_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace occurrences of 501234567 with 528126653
        new_content = content.replace(old_number, new_number)
        
        if new_content != content:
            with open(abs_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
        else:
            print(f"No changes in {file_path}")
    else:
        print(f"File not found: {file_path}")
