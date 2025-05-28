
import { Group } from '@hakit/components';
import SoftwareUpdatesSection from './system/SoftwareUpdatesSection';
import FirmwareUpdatesSection from './system/FirmwareUpdatesSection';
import BackupNetworkSection from './system/BackupNetworkSection';
import ControllerStatusSection from './system/ControllerStatusSection';

function SystemSection({ id }: { id?: string }) {
  return (
    <Group id={id} title='System Management' layout='column' justifyContent='flex-start' alignItems='stretch' description='Oversee system updates, health, and network status.' gap="1rem">
      <SoftwareUpdatesSection />
      <FirmwareUpdatesSection />
      <BackupNetworkSection />
      <ControllerStatusSection />
    </Group>
  );
}
export default SystemSection;
