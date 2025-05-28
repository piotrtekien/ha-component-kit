
import { Group, Row, ButtonCard } from '@hakit/components';

function FirmwareUpdatesSection() {
  const commonProps = { service:'install', availableModes:['on', 'unavailable'] as const, lg:3, md:4, sm:6 };
  return (
    <Group title='Device Firmware Updates' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="0.5rem">
      <ButtonCard entity='update.power_plug_living_room_rear_firmware' title='LR Rear Plug FW' icon='mdi:power-plug-outline' {...commonProps} />
      <ButtonCard entity='update.power_plug_living_room_dining_table_firmware' title='LR Dining Plug FW' icon='mdi:power-plug-outline' {...commonProps} />
      <ButtonCard entity='update.power_plug_living_room_tv_firmware' title='LR TV Plug FW' icon='mdi:power-plug-outline' {...commonProps} />
      <ButtonCard entity='update.power_plug_bedroom_desk_firmware' title='BR Desk Plug FW' icon='mdi:power-plug-outline' {...commonProps} />
      <ButtonCard entity='update.power_plug_living_room_ha_yellow_firmware' title='HA Yellow Plug FW' icon='mdi:power-plug-outline' {...commonProps} />
      <ButtonCard entity='update.zigbee_button_living_room_power_toggle_firmware' title='LR Power Toggle FW' icon='mdi:light-switch' {...commonProps} />
      <ButtonCard entity='update.custom_zigbee_button_bedroom_extra_firmware' title='BR Extra Button FW' icon='mdi:gesture-tap-button' {...commonProps} />
      <ButtonCard entity='update.custom_zigbee_button_ambilight_hue_sync_firmware' title='Ambilight Sync Button FW' icon='mdi:television-ambient-light' {...commonProps} />
      <ButtonCard entity='update.home_assistant_yellow_radio_firmware' title='HA Yellow Radio FW' icon='mdi:radio-tower' {...commonProps} />
    </Group>
  );
}
export default FirmwareUpdatesSection;
