
import { Group, Row, SensorCard } from '@hakit/components';

function BatteryMonitorSection({ id }: { id?: string }) {
  return (
    <Group id={id} title="Device Battery Levels" layout="row" justifyContent="flex-start" alignItems="stretch" description="Keep an eye on the battery status of your wireless devices." wrap="wrap" gap="1rem">
      <SensorCard entity="sensor.piotr_s_oneplus_12r_battery_level" title="Piotr's OnePlus 12R" icon="mdi:cellphone-wireless" lg={3} md={4} sm={6} />
      <SensorCard entity="sensor.living_room_sofa_remote_battery" title="Sofa Remote (LR)" icon="mdi:remote-tv" lg={2} md={3} sm={6} />
      <SensorCard entity="sensor.living_room_wall_remote_battery" title="Wall Remote (LR)" icon="mdi:light-switch-variant" lg={2} md={3} sm={6} />
      <SensorCard entity="sensor.living_room_dining_table_remote_battery" title="Dining Remote (LR)" icon="mdi:palette-swatch-variant" lg={2} md={3} sm={6} />
      <SensorCard entity="sensor.bedroom_wall_remote_battery" title="Wall Remote (BR)" icon="mdi:light-switch" lg={2} md={3} sm={6} />
      <SensorCard entity="sensor.zigbee_button_living_room_power_toggle_battery" title="Zigbee Power Toggle" icon="mdi:power-plug-outline" lg={3} md={4} sm={6} />
      <SensorCard entity="sensor.custom_zigbee_button_bedroom_extra_battery" title="Zigbee Extra Button (BR)" icon="mdi:gesture-tap-button" lg={3} md={4} sm={6} />
      <SensorCard entity="sensor.custom_zigbee_button_ambilight_hue_sync_battery" title="Zigbee Ambilight Sync Button" icon="mdi:television-ambient-light" lg={3} md={4} sm={6} />
    </Group>
  );
}

export default BatteryMonitorSection;
