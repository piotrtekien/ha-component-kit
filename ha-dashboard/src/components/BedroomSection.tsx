
import { Group, Row, ButtonCard, RangeSlider, SensorCard } from '@hakit/components';

function BedroomSection({ id }: { id?: string }) {
  return (
    <Group id={id} title='Bedroom' layout='column' justifyContent='flex-start' alignItems='stretch' description='Manage lights and devices in the bedroom.'>
      <Group title='Lights Control' layout='column' justifyContent='flex-start' alignItems='stretch' gap="1rem">
        <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
           <ButtonCard entity='light.bedroom' service='toggle' title='All Bedroom Lights' icon='mdi:lightbulb-group-outline' lg={6} md={6} sm={12}/>
           <RangeSlider entity='light.bedroom' attribute='brightness' min={0} max={255} step={1} label='All Lights Brightness' lg={6} md={6} sm={12}/>
        </Row>
        <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
          <ButtonCard entity='light.bedroom_ceiling_light' service='toggle' title='Ceiling Light' icon='mdi:ceiling-light-outline' lg={2} md={3} sm={6}/>
          <RangeSlider entity='light.bedroom_ceiling_light' attribute='brightness' min={0} max={255} step={1} label='Ceiling Brightness' lg={4} md={3} sm={6}/>
          <ButtonCard entity='light.bedroom_desk_light' service='toggle' title='Desk Light' icon='mdi:desk-lamp' lg={2} md={3} sm={6}/>
          <RangeSlider entity='light.bedroom_desk_light' attribute='brightness' min={0} max={255} step={1} label='Desk Brightness' lg={4} md={3} sm={6}/>
        </Row>
      </Group>
      <Group title='Power Plugs (Simple Toggle)' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <ButtonCard entity='switch.power_plug_bedroom_desk' service='toggle' title='Desk Plug' icon='mdi:power-plug' lg={3} md={4} sm={6} />
      </Group>
      <Group title='Remote Batteries' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <SensorCard entity='sensor.bedroom_wall_remote_battery' title='Wall Remote Battery' icon='mdi:battery' lg={3} md={4} sm={6} />
      </Group>
    </Group>
  );
}

export default BedroomSection;
