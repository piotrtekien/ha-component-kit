
import { Group, Row, ButtonCard, SensorCard } from '@hakit/components';

function PowerMonitoringSection({ id }: { id?: string }) {
  return (
    <Group id={id} title="Power Plug Management" layout="column" description="Monitor and control smart power plugs.">
      <Row fullWidth gap="1rem" alignItems="stretch" wrap="wrap">
        <Group title="Living Room Rear Plug" layout="column" gap="0.5rem" lg={4} md={6} sm={12} card
          cssStyles={`padding: 1rem; border-radius: var(--ha-card-border-radius, 12px); background-color: var(--ha-card-background, var(--card-background-color, white)); box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));`}
        >
          <ButtonCard entity="switch.power_plug_living_room_rear" service="toggle" name="Power" icon="mdi:power-socket-de" />
          <SensorCard entity="sensor.power_plug_living_room_rear_power" name="Current Power" icon="mdi:lightning-bolt" />
          <SensorCard entity="sensor.power_plug_living_room_rear_electric_consumption_kwh" name="Total Consumption" icon="mdi:meter-electric-outline" />
          <SensorCard entity="sensor.power_plug_living_room_rear_node_status" name="Node Status" icon="mdi:signal-variant" />
          <SensorCard entity="sensor.power_plug_living_room_rear_last_seen" name="Last Seen" icon="mdi:clock-time-three-outline" />
          <Row gap="0.5rem" fullWidth justifyContentStretch>
            <ButtonCard entity="button.power_plug_living_room_rear_ping" title="Ping Plug" icon="mdi:access-point-network" service="press" layoutType='slim' fullWidth />
            <ButtonCard entity="button.power_plug_living_room_rear_reset_accumulated_values" title="Reset kWh" icon="mdi:history" service="press" layoutType='slim' fullWidth warning="Reset kWh data?" />
          </Row>
        </Group>

        <Group title="Living Room Dining Table Plug" layout="column" gap="0.5rem" lg={4} md={6} sm={12} card
          cssStyles={`padding: 1rem; border-radius: var(--ha-card-border-radius, 12px); background-color: var(--ha-card-background, var(--card-background-color, white)); box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));`}
        >
          <ButtonCard entity="switch.power_plug_living_room_dining_table" service="toggle" name="Power" icon="mdi:power-socket-de" />
          <SensorCard entity="sensor.power_plug_living_room_dining_table_power" name="Current Power" icon="mdi:lightning-bolt" />
          <SensorCard entity="sensor.power_plug_living_room_dining_table_electric_consumption_kwh" name="Total Consumption" icon="mdi:meter-electric-outline" />
          <SensorCard entity="sensor.power_plug_living_room_dining_table_node_status" name="Node Status" icon="mdi:signal-variant" />
          <SensorCard entity="sensor.power_plug_living_room_dining_table_last_seen" name="Last Seen" icon="mdi:clock-time-three-outline" />
          <Row gap="0.5rem" fullWidth justifyContentStretch>
            <ButtonCard entity="button.power_plug_living_room_dining_table_ping" title="Ping Plug" icon="mdi:access-point-network" service="press" layoutType='slim' fullWidth />
            <ButtonCard entity="button.power_plug_living_room_dining_table_reset_accumulated_values" title="Reset kWh" icon="mdi:history" service="press" layoutType='slim' fullWidth warning="Reset kWh data?" />
          </Row>
        </Group>

        <Group title="Living Room TV Plug" layout="column" gap="0.5rem" lg={4} md={6} sm={12} card
          cssStyles={`padding: 1rem; border-radius: var(--ha-card-border-radius, 12px); background-color: var(--ha-card-background, var(--card-background-color, white)); box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));`}
        >
          <ButtonCard entity="switch.power_plug_living_room_tv" service="toggle" name="Power" icon="mdi:power-socket-de" />
          <SensorCard entity="sensor.power_plug_living_room_tv_electric_consumption_w" name="Current Power" icon="mdi:lightning-bolt" />
          <SensorCard entity="sensor.power_plug_living_room_tv_electric_consumption_kwh" name="Total Consumption" icon="mdi:meter-electric-outline" />
          <SensorCard entity="sensor.power_plug_living_room_tv_node_status" name="Node Status" icon="mdi:signal-variant" />
          <SensorCard entity="sensor.power_plug_living_room_tv_last_seen" name="Last Seen" icon="mdi:clock-time-three-outline" />
          <Row gap="0.5rem" fullWidth justifyContentStretch>
            <ButtonCard entity="button.power_plug_living_room_tv_ping" title="Ping Plug" icon="mdi:access-point-network" service="press" layoutType='slim' fullWidth />
            <ButtonCard entity="button.power_plug_living_room_tv_reset_accumulated_values" title="Reset kWh" icon="mdi:history" service="press" layoutType='slim' fullWidth warning="Reset kWh data?" />
          </Row>
        </Group>

        <Group title="Bedroom Desk Plug" layout="column" gap="0.5rem" lg={4} md={6} sm={12} card
          cssStyles={`padding: 1rem; border-radius: var(--ha-card-border-radius, 12px); background-color: var(--ha-card-background, var(--card-background-color, white)); box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));`}
        >
          <ButtonCard entity="switch.power_plug_bedroom_desk" service="toggle" name="Power" icon="mdi:power-socket-de" />
          <SensorCard entity="sensor.power_plug_bedroom_desk_power" name="Current Power" icon="mdi:lightning-bolt" />
          <SensorCard entity="sensor.power_plug_bedroom_desk_electric_consumption_kwh" name="Total Consumption" icon="mdi:meter-electric-outline" />
          <SensorCard entity="sensor.power_plug_bedroom_desk_node_status" name="Node Status" icon="mdi:signal-variant" />
          <SensorCard entity="sensor.power_plug_bedroom_desk_last_seen" name="Last Seen" icon="mdi:clock-time-three-outline" />
          <Row gap="0.5rem" fullWidth justifyContentStretch>
            <ButtonCard entity="button.power_plug_bedroom_desk_ping" title="Ping Plug" icon="mdi:access-point-network" service="press" layoutType='slim' fullWidth />
            <ButtonCard entity="button.power_plug_bedroom_desk_reset_accumulated_values" title="Reset kWh" icon="mdi:history" service="press" layoutType='slim' fullWidth warning="Reset kWh data?" />
          </Row>
        </Group>

        <Group title="Home Assistant Yellow Plug" layout="column" gap="0.5rem" lg={4} md={6} sm={12} card
          cssStyles={`padding: 1rem; border-radius: var(--ha-card-border-radius, 12px); background-color: var(--ha-card-background, var(--card-background-color, white)); box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));`}
        >
          <ButtonCard entity="switch.power_plug_living_room_ha_yellow" service="toggle" name="Power" icon="mdi:power-socket-de" />
          <SensorCard entity="sensor.power_plug_living_room_ha_yellow_power" name="Current Power" icon="mdi:lightning-bolt" />
          <SensorCard entity="sensor.power_plug_living_room_ha_yellow_electric_consumption_kwh" name="Total Consumption" icon="mdi:meter-electric-outline" />
          <SensorCard entity="sensor.power_plug_living_room_ha_yellow_node_status" name="Node Status" icon="mdi:signal-variant" />
          <SensorCard entity="sensor.power_plug_living_room_ha_yellow_last_seen" name="Last Seen" icon="mdi:clock-time-three-outline" />
          <Row gap="0.5rem" fullWidth justifyContentStretch>
            <ButtonCard entity="button.power_plug_living_room_ha_yellow_ping" title="Ping Plug" icon="mdi:access-point-network" service="press" layoutType='slim' fullWidth />
            <ButtonCard entity="button.power_plug_living_room_ha_yellow_reset_accumulated_values" title="Reset kWh" icon="mdi:history" service="press" layoutType='slim' fullWidth warning="Reset kWh data?" />
          </Row>
        </Group>
      </Row>
    </Group>
  );
}

export default PowerMonitoringSection;
