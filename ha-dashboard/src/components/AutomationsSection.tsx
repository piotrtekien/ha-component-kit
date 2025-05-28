
import { Group, Row, ButtonCard } from '@hakit/components';

function AutomationsSection({ id }: { id?: string }) {
  return (
    <Group id={id} title='Automation Control' layout='column' justifyContent='flex-start' alignItems='stretch' description='Manage and toggle your home automations.'>
      <Group title='Run/Trigger Automations' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <ButtonCard entity='automation.toggle_ambisync_tv' service='toggle' title='AmbiSync TV' icon='mdi:television-ambient-light' lg={3} md={4} sm={6} />
        <ButtonCard entity='automation.toggle_living_room_power' service='toggle' title='Living Room Power Automation' icon='mdi:home-lightbulb-outline' lg={3} md={4} sm={6} />
        <ButtonCard entity='automation.system_rainbow_unicorn' service='toggle' title='Rainbow Unicorn' icon='mdi:unicorn-variant' lg={3} md={4} sm={6} />
        <ButtonCard entity='automation.toggle_tv_ambilight_hue' service='toggle' title='TV Ambilight Hue Automation' icon='mdi:television-guide' lg={3} md={4} sm={6} />
      </Group>
      <Group title='Enable/Disable Automation Rules' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <ButtonCard entity='switch.automation_living_room_wall' service='toggle' title='Living Room Wall Rule' icon='mdi:cogs' lg={3} md={4} sm={6} />
        <ButtonCard entity='switch.automation_living_room_sofa_dimmer' service='toggle' title='Living Room Sofa Dimmer Rule' icon='mdi:cogs' lg={3} md={4} sm={6} />
        <ButtonCard entity='switch.automation_living_room_tv_table_remote' service='toggle' title='Living Room TV Table Rule' icon='mdi:cogs' lg={3} md={4} sm={6} />
        <ButtonCard entity='switch.automation_bedroom_wall_remote' service='toggle' title='Bedroom Wall Remote Rule' icon='mdi:cogs' lg={3} md={4} sm={6} />
      </Group>
    </Group>
  );
}

export default AutomationsSection;
