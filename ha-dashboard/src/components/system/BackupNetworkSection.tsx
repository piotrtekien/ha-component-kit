
import { Group, Row, SensorCard } from '@hakit/components';

function BackupNetworkSection() {
  return (
    <Group title='Backup & Network Status' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
      <SensorCard entity='sensor.backup_backup_manager_state' title='Backup State' icon='mdi:archive-arrow-down-outline' lg={3} md={4} sm={6} />
      <SensorCard entity='sensor.backup_last_successful_automatic_backup' title='Last Successful Backup' icon='mdi:history' lg={3} md={4} sm={6} />
      <SensorCard entity='sensor.backup_next_scheduled_automatic_backup' title='Next Scheduled Backup' icon='mdi:calendar-clock-outline' lg={3} md={4} sm={6} />
      <SensorCard entity='sensor.stuckinajacuzzi_external_ip' title='External IP Address' icon='mdi:ip-network' lg={3} md={4} sm={6} />
      <SensorCard entity='sensor.stuckinajacuzzi_download_speed' title='Download Speed' icon='mdi:arrow-down-bold-circle-outline' unit="Mbps" lg={3} md={4} sm={6} />
      <SensorCard entity='sensor.stuckinajacuzzi_upload_speed' title='Upload Speed' icon='mdi:arrow-up-bold-circle-outline' unit="Mbps" lg={3} md={4} sm={6} />
      <SensorCard entity='binary_sensor.stuckinajacuzzi_wan_status' title='WAN Internet Status' icon='mdi:wan' lg={3} md={4} sm={6} />
    </Group>
  );
}
export default BackupNetworkSection;
