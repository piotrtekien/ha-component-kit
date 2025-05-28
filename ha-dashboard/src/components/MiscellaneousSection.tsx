
import { Group, Row, EntitiesCard, EntitiesCardRow, ButtonCard } from '@hakit/components';

function MiscellaneousSection({ id }: { id?: string }) {
  return (
    <Group id={id} title='Utilities & Extras' layout='column' justifyContent='flex-start' alignItems='stretch' description='Additional tools and device functions.'>
      <Row fullWidth gap='1rem' alignItems='stretch' wrap='wrap'>
        <EntitiesCard title='My Shopping List' lg={4} md={6} sm={12}>
          <EntitiesCardRow entity='todo.shopping_list' name='Items to Buy' />
        </EntitiesCard>
        <ButtonCard
          title="Start Voice Conversation"
          icon="mdi:account-voice"
          entity="conversation.home_assistant"
          service="process"
          serviceData={{ text: "What can I help you with?" }}
          lg={4} md={6} sm={12}
        />
      </Row>
      <Group title="Device Identify Buttons" layout="row" justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="1rem">
        <ButtonCard entity="button.zigbee_button_living_room_power_toggle_identify" title="ID LR Power Toggle" icon="mdi:magnify" service="press" layoutType='slim' lg={3} md={4} sm={6} />
        <ButtonCard entity="button.custom_zigbee_button_bedroom_extra_identify" title="ID BR Extra Button" icon="mdi:magnify" service="press" layoutType='slim' lg={3} md={4} sm={6} />
        <ButtonCard entity="button.custom_zigbee_button_ambilight_hue_sync_identify" title="ID Ambilight Sync Button" icon="mdi:magnify" service="press" layoutType='slim' lg={3} md={4} sm={6} />
      </Group>
    </Group>
  );
}

export default MiscellaneousSection;
