
import { Group, Row, ButtonCard } from '@hakit/components';

function SoftwareUpdatesSection() {
  const commonProps = { service:'install', availableModes:['on', 'unavailable'] as const, lg:2, md:3, sm:4 };
  return (
    <Group title='Core Software & Add-on Updates' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="0.5rem">
      <ButtonCard entity='update.home_assistant_core_update' title='HA Core' icon='mdi:home-assistant' {...commonProps} />
      <ButtonCard entity='update.home_assistant_supervisor_update' title='HA Supervisor' icon='mdi:home-assistant' {...commonProps} />
      <ButtonCard entity='update.home_assistant_operating_system_update' title='HA OS' icon='mdi:server-network' {...commonProps} />
      <ButtonCard entity='update.file_editor_update' title='File Editor' icon='mdi:file-code' {...commonProps} />
      <ButtonCard entity='update.samba_share_update' title='Samba Share' icon='mdi:folder-network-outline' {...commonProps} />
      <ButtonCard entity='update.z_wave_js_update' title='Z-Wave JS' icon='mdi:z-wave' {...commonProps} />
      <ButtonCard entity='update.advanced_ssh_web_terminal_update' title='SSH Terminal' icon='mdi:console' {...commonProps} />
      <ButtonCard entity='update.cloudflared_update' title='Cloudflared' icon='mdi:cloud-sync' {...commonProps} />
      <ButtonCard entity='update.hakit_update' title='Hakit Dashboard' icon='mdi:view-dashboard-edit' {...commonProps} />
    </Group>
  );
}
export default SoftwareUpdatesSection;
