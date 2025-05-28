
import { Group, Row, ButtonCard } from '@hakit/components';

function ScenesSection({ id }: { id?: string }) {
  return (
    <Group id={id} title="Scenes Activation" layout="column" gap="1rem" description="Quickly activate your favorite scenes.">
      <Group title="Living Room Scenes" layout="row" justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="0.5rem">
        <ButtonCard entity="scene.living_room_relax" service="turn_on" title="Relax" icon="mdi:sofa-single" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.living_room_bright" service="turn_on" title="Bright" icon="mdi:lightbulb-on" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.living_room_tokyo" service="turn_on" title="Tokyo" icon="mdi:lantern" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.living_room_chinatown" service="turn_on" title="Chinatown" icon="mdi:dragon" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.living_room_rio" service="turn_on" title="Rio" icon="mdi:party-popper" layoutType='slim' lg={2} md={3} sm={4} />
      </Group>
      <Group title="Bedroom Scenes" layout="row" justifyContent='flex-start' alignItems='stretch' wrap='wrap' gap="0.5rem">
        <ButtonCard entity="scene.bedroom_osaka" service="turn_on" title="Osaka" icon="mdi:floor-lamp-torchiere-variant" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.bedroom_tokyo" service="turn_on" title="Tokyo" icon="mdi:floor-lamp-torchiere-variant-outline" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.bedroom_bright" service="turn_on" title="Bright" icon="mdi:brightness-7" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.bedroom_relax" service="turn_on" title="Relax" icon="mdi:moon-waning-crescent" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.bedroom_rio" service="turn_on" title="Rio" icon="mdi:pine-tree-fire" layoutType='slim' lg={2} md={3} sm={4} />
        <ButtonCard entity="scene.bedroom_glitz_and_glam" service="turn_on" title="Glitz & Glam" icon="mdi:creation" layoutType='slim' lg={2} md={3} sm={4} />
      </Group>
    </Group>
  );
}

export default ScenesSection;
