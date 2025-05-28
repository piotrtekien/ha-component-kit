
import { Column, Group, EntitiesCard } from '@hakit/components';
import { useHass } from '@hakit/core';

function AllEntitiesListSection({ id }: { id?: string }) {
  const { getAllEntities } = useHass();
  const entities = Object.keys(getAllEntities()) as (keyof ReturnType<typeof getAllEntities>)[];
  const entitiesJson = JSON.stringify(entities, null, 2);

  return (
    <Column fullWidth gap='1rem'>
      <Group
        id={id}
        title='All Available Entities'
        layout='column'
        justifyContent='flex-start'
        alignItems='stretch'
        description={`List of all ${entities.length} entities in your Home Assistant instance as JSON`}
      >
        <EntitiesCard includeLastUpdated>
          <pre>{entitiesJson}</pre>
        </EntitiesCard>
      </Group>
    </Column>
  );
}

export default AllEntitiesListSection;
