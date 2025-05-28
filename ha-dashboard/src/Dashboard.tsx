
import { Column, Group } from '@hakit/components';
import TopSection from './components/TopSection';
import LivingRoomSection from './components/LivingRoomSection';
import BedroomSection from './components/BedroomSection';
import ScenesSection from './components/ScenesSection';
import PowerMonitoringSection from './components/PowerMonitoringSection';
import BatteryMonitorSection from './components/BatteryMonitorSection';
import AutomationsSection from './components/AutomationsSection';
import SystemSection from './components/SystemSection';
import MiscellaneousSection from './components/MiscellaneousSection';
import AllEntitiesListSection from './components/AllEntitiesListSection';

function Dashboard() {
  return (
    <Column fullWidth gap='1rem'>
      <Group title='Dashboard' layout='column' gap='1rem' collapsible={true}>
        <TopSection id='overview' />
        <LivingRoomSection id='living-room' />
        <BedroomSection id='bedroom' />
        <ScenesSection id='scenes' />
        <PowerMonitoringSection id='power-monitoring' />
        <BatteryMonitorSection id='battery-levels' />
        <AutomationsSection id='automations' />
        <SystemSection id='system' />
        <MiscellaneousSection id='miscellaneous' />
        <AllEntitiesListSection id='all-entities' />
      </Group>
    </Column>
  );
}

export default Dashboard;
