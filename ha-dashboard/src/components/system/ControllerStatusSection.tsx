
import { Group, Row, SensorCard } from '@hakit/components';

function ControllerStatusSection() {
  return (
    <Group title='System Controllers & Devices' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
      <SensorCard entity='sensor.system_zooz_800_series_z_wave_lr_usb_zst39_status' title='Z-Wave USB Controller' icon='mdi:z-wave' lg={4} md={6} sm={12} />
    </Group>
  );
}
export default ControllerStatusSection;
