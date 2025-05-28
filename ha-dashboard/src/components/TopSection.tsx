
import { Group, Row, TimeCard, PersonCard, WeatherCard, EntitiesCard, EntitiesCardRow, SensorCard, ButtonCard } from '@hakit/components';

function TopSection({ id }: { id?: string }) {
  return (
    <Group id={id} title='Overview' layout='column' justifyContent='flex-start' alignItems='stretch' description='House status, weather, and key information.'>
      <Row fullWidth gap='1rem' alignItems='stretch' wrap='wrap'>
        <TimeCard lg={3} md={4} sm={6} />
        <WeatherCard entity='weather.forecast_home' lg={3} md={4} sm={6} />
        <PersonCard entity='person.piotr' name='Piotr' lg={3} md={4} sm={6} />
        <PersonCard entity='person.jason' name='Jason' lg={3} md={4} sm={6} />
      </Row>
      <Row fullWidth gap='1rem' alignItems='stretch' wrap='wrap'>
        <EntitiesCard title='Sun Times' includeLastUpdated lg={4} md={6} sm={12}>
          <EntitiesCardRow entity='sensor.sun_next_dawn' name='Next Dawn' />
          <EntitiesCardRow entity='sensor.sun_next_dusk' name='Next Dusk' />
          <EntitiesCardRow entity='sensor.sun_next_midnight' name='Next Midnight' />
          <EntitiesCardRow entity='sensor.sun_next_noon' name='Next Noon' />
          <EntitiesCardRow entity='sensor.sun_next_rising' name='Next Sunrise' />
          <EntitiesCardRow entity='sensor.sun_next_setting' name='Next Sunset' />
        </EntitiesCard>
        <SensorCard entity='sensor.piotr_s_oneplus_12r_battery_level' title="Piotr's Phone Battery" icon='mdi:battery-charging-80' lg={2} md={3} sm={6} />
        <ButtonCard entity='device_tracker.piotr_s_oneplus_12r' title="Piotr's Phone Location" icon='mdi:cellphone' hideState={false} lg={2} md={3} sm={6} />
        <SensorCard entity='binary_sensor.stuckinajacuzzi_wan_status' title='Internet Status' icon='mdi:wan' lg={2} md={3} sm={6} />
        <SensorCard entity='sensor.backup_backup_manager_state' title='Last Backup State' icon='mdi:backup-restore' lg={2} md={3} sm={6} />
      </Row>
    </Group>
  );
}

export default TopSection;
