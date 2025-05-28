
import { Group, Row, ButtonCard, RangeSlider, MediaPlayerCard, SensorCard } from '@hakit/components';

function LivingRoomSection({ id }: { id?: string }) {
  return (
    <Group id={id} title='Living Room' layout='column' justifyContent='flex-start' alignItems='stretch' description='Manage lights, media, and devices in the living room.'>
      <Group title='Lights Control' layout='column' justifyContent='flex-start' alignItems='stretch' gap="1rem">
        <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
            <ButtonCard entity='light.living_room' service='toggle' title='All Living Room Lights' icon='mdi:lightbulb-group-outline' lg={6} md={6} sm={12}/>
            <RangeSlider entity='light.living_room' attribute='brightness' min={0} max={255} step={1} label='All Lights Brightness' lg={6} md={6} sm={12}/>
        </Row>
        <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
            <ButtonCard entity='light.living_room_dining_1_light' service='toggle' title='Dining 1' icon='mdi:lightbulb-outline' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_dining_1_light' attribute='brightness' min={0} max={255} step={1} label='Dining 1 Brightness' lg={4} md={3} sm={6}/>
            <ButtonCard entity='light.living_room_dining_2_light' service='toggle' title='Dining 2' icon='mdi:lightbulb-outline' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_dining_2_light' attribute='brightness' min={0} max={255} step={1} label='Dining 2 Brightness' lg={4} md={3} sm={6}/>
            <ButtonCard entity='light.living_room_dining_3_light' service='toggle' title='Dining 3' icon='mdi:lightbulb-outline' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_dining_3_light' attribute='brightness' min={0} max={255} step={1} label='Dining 3 Brightness' lg={4} md={3} sm={6}/>
        </Row>
        <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
            <ButtonCard entity='light.living_room_boja_light' service='toggle' title='Boja Light' icon='mdi:ceiling-light-outline' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_boja_light' attribute='brightness' min={0} max={255} step={1} label='Boja Brightness' lg={4} md={3} sm={6}/>
            <ButtonCard entity='light.living_room_desk_light' service='toggle' title='Desk Light' icon='mdi:desk-lamp' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_desk_light' attribute='brightness' min={0} max={255} step={1} label='Desk Brightness' lg={4} md={3} sm={6}/>
        </Row>
        <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
            <ButtonCard entity='light.living_room_l_tower_top_light' title='L Tower Top' icon='mdi:led-strip-variant' service='toggle' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_l_tower_top_light' attribute='brightness' min={0} max={255} step={1} label='L Tower Top Brightness' lg={4} md={3} sm={6}/>
            <ButtonCard entity='light.living_room_l_tower_bottom_light' title='L Tower Bottom' icon='mdi:led-strip-variant' service='toggle' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_l_tower_bottom_light' attribute='brightness' min={0} max={255} step={1} label='L Tower Bottom Brightness' lg={4} md={3} sm={6}/>
        </Row>
        <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
            <ButtonCard entity='light.living_room_r_tower_top_light' title='R Tower Top' icon='mdi:led-strip-variant' service='toggle' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_r_tower_top_light' attribute='brightness' min={0} max={255} step={1} label='R Tower Top Brightness' lg={4} md={3} sm={6}/>
            <ButtonCard entity='light.living_room_r_tower_bottom_light' title='R Tower Bottom' icon='mdi:led-strip-variant' service='toggle' lg={2} md={3} sm={6}/>
            <RangeSlider entity='light.living_room_r_tower_bottom_light' attribute='brightness' min={0} max={255} step={1} label='R Tower Bottom Brightness' lg={4} md={3} sm={6}/>
        </Row>
      </Group>
      <Group title='Power Plugs (Simple Toggle)' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <ButtonCard entity='switch.power_plug_living_room_rear' service='toggle' title='Rear Plug' icon='mdi:power-plug' lg={3} md={4} sm={6} />
        <ButtonCard entity='switch.power_plug_living_room_dining_table' service='toggle' title='Dining Table Plug' icon='mdi:power-plug' lg={3} md={4} sm={6} />
        <ButtonCard entity='switch.power_plug_living_room_tv' service='toggle' title='TV Plug' icon='mdi:power-plug' lg={3} md={4} sm={6} />
        <ButtonCard entity='switch.power_plug_living_room_ha_yellow' service='toggle' title='HA Yellow Plug' icon='mdi:power-plug' lg={3} md={4} sm={6} />
      </Group>
      <Group title='Media Players' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <MediaPlayerCard entity='media_player.philips_ambilight_tv_philips_tv' title='Philips Ambilight TV' volumeLayout='slider' hideMute={false} lg={4} md={6} sm={12} />
        <MediaPlayerCard entity='media_player.lg_soundbar_dsp9ya' title='LG Soundbar' volumeLayout='slider' hideMute={false} lg={4} md={6} sm={12} />
        <MediaPlayerCard entity='media_player.philips_ambilight_tv_google_cast' title='Philips TV Chromecast' volumeLayout='slider' hideMute={false} lg={4} md={6} sm={12} />
      </Group>
      <Group title='TV Controls & Status' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <ButtonCard entity='switch.philips_ambilight_tv_screen_state' service='toggle' title='TV Screen Power' icon='mdi:television-classic' lg={3} md={4} sm={6} />
        <ButtonCard entity='switch.philips_ambilight_tv_ambilight_hue' service='toggle' title='Ambilight + Hue Sync' icon='mdi:television-shimmer' lg={3} md={4} sm={6} />
        <ButtonCard entity='light.philips_ambilight_tv_ambilight' service='toggle' title='TV Ambilight Toggle' icon='mdi:lightbulb-outline' lg={3} md={4} sm={6} />
        <SensorCard entity='binary_sensor.philips_ambilight_tv_recording_ongoing' title='TV Recording' icon='mdi:record-rec' lg={3} md={4} sm={6} />
        <SensorCard entity='binary_sensor.philips_ambilight_tv_new_recording_available' title='New TV Recording' icon='mdi:movie-open' lg={3} md={4} sm={6} />
      </Group>
      <Group title='Sensors' layout='row' justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <SensorCard entity='binary_sensor.entertainment_area' name='Entertainment Area Status' lg={3} md={4} sm={12} />
        <SensorCard entity='sensor.living_room_sofa_remote_battery' title='Sofa Remote Battery' icon='mdi:battery' lg={3} md={4} sm={6} />
        <SensorCard entity='sensor.living_room_wall_remote_battery' title='Wall Remote Battery' icon='mdi:battery' lg={3} md={4} sm={6} />
        <SensorCard entity='sensor.living_room_dining_table_remote_battery' title='Dining Table Remote Battery' icon='mdi:battery' lg={3} md={4} sm={6} />
      </Group>
    </Group>
  );
}

export default LivingRoomSection;
