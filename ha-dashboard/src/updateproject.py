import os
import re

BASE_PATH = '/opt/homebrew/var/www-vhosts/projects/ha-component-kit/ha-dashboard/src'

# Path to the file that needs modification
battery_monitor_section_path_relative = 'components/BatteryMonitorSection.tsx'
battery_monitor_section_path_full = os.path.join(BASE_PATH, battery_monitor_section_path_relative)

def main():
    if not os.path.exists(battery_monitor_section_path_full):
        print(f"Error: File not found at {battery_monitor_section_path_full}")
        print("Please ensure the BASE_PATH is correct and the file exists.")
        return

    try:
        with open(battery_monitor_section_path_full, 'r', encoding='utf-8') as f:
            content = f.read()

        # Step 1: Remove GaugeCard from imports
        # Example: import { Group, Row, SensorCard, GaugeCard } from '@hakit/components';
        # Becomes: import { Group, Row, SensorCard } from '@hakit/components';
        
        # Find the import line for @hakit/components
        import_pattern = r"import\s*{([^}]*)}\s*from\s*'@hakit/components';"
        
        def replace_import(match):
            imported_items_str = match.group(1)
            items = [item.strip() for item in imported_items_str.split(',')]
            if 'GaugeCard' in items:
                items.remove('GaugeCard')
            # Remove empty strings if any resulted from removal
            items = [item for item in items if item]
            if not items: # Should not happen if other imports exist
                return "import {} from '@hakit/components';" 
            return f"import {{ {', '.join(items)} }} from '@hakit/components';"

        content_after_import_removal, num_import_subs = re.subn(import_pattern, replace_import, content)
        if num_import_subs > 0:
            print(f"Removed 'GaugeCard' from imports in {battery_monitor_section_path_relative}.")
        else:
            print(f"'GaugeCard' import not found as expected in {battery_monitor_section_path_relative}. Manual check might be needed if error persists.")
            # If the import wasn't exactly as expected, the content might not change here.

        # Step 2: Replace <GaugeCard ... /> with <SensorCard ... /> for the specific entity
        # From: <GaugeCard entity="sensor.piotr_s_oneplus_12r_battery_level" name="Piotr's OnePlus 12R" ... />
        # To:   <SensorCard entity="sensor.piotr_s_oneplus_12r_battery_level" title="Piotr's OnePlus 12R" icon="mdi:cellphone-wireless" lg={3} md={4} sm={6} />
        # (We'll use SensorCard defaults mostly, but add a title and icon for consistency)

        gauge_card_usage_pattern = r'<GaugeCard\s+entity="sensor\.piotr_s_oneplus_12r_battery_level"\s+name="Piotr\'s OnePlus 12R"[^>]*/>'
        
        replacement_sensor_card = '<SensorCard entity="sensor.piotr_s_oneplus_12r_battery_level" title="Piotr\'s OnePlus 12R" icon="mdi:cellphone-wireless" lg={3} md={4} sm={6} />'
        
        content_final, num_usage_subs = re.subn(gauge_card_usage_pattern, replacement_sensor_card, content_after_import_removal)

        if num_usage_subs > 0:
            print(f"Replaced GaugeCard usage with SensorCard for 'sensor.piotr_s_oneplus_12r_battery_level' in {battery_monitor_section_path_relative}.")
        else:
            print(f"GaugeCard usage for 'sensor.piotr_s_oneplus_12r_battery_level' not found as expected in {battery_monitor_section_path_relative}. Manual check might be needed.")


        if num_import_subs > 0 or num_usage_subs > 0:
            with open(battery_monitor_section_path_full, 'w', encoding='utf-8') as f:
                f.write(content_final)
            print(f"Successfully modified: {battery_monitor_section_path_full}")
        else:
            print(f"No changes made to {battery_monitor_section_path_full} as patterns were not found.")


    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    if not os.path.isdir(BASE_PATH):
        print(f"Error: The specified BASE_PATH '{BASE_PATH}' does not exist or is not a directory.")
        print("Please EDIT THE BASE_PATH variable in the script to point to your dashboard's src directory.")
    else:
        print(f"Using BASE_PATH: {BASE_PATH}")
        confirm = input(f"This script will attempt to modify '{battery_monitor_section_path_relative}' to replace GaugeCard. Ensure BASE_PATH is correct and you have a backup. Continue? (yes/no): ")
        if confirm.lower() == 'yes':
            main()
        else:
            print("Operation cancelled by user.")