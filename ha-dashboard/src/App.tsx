
import { ThemeProvider, SidebarCard, Row, Column } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import Dashboard from './Dashboard';

function App() {
  return (
    <HassConnect hassUrl={import.meta.env.VITE_HA_URL} hassToken={import.meta.env.VITE_HA_TOKEN}>
      <ThemeProvider darkMode={true} theme={{ device: { sidebarCard: { width: { expanded: '25rem' } } } }}>
        <Row fullWidth wrap='nowrap' fullHeight alignItems='stretch'>
          <SidebarCard
            startOpen={false}
            weatherCardProps={{ entity: 'weather.forecast_home' }}
            include={[
              { title: 'Overview', hash: '#overview' },
              { title: 'Living Room', hash: '#living-room' },
              { title: 'Bedroom', hash: '#bedroom' },
              { title: 'Scenes', hash: '#scenes' },
              { title: 'Power Monitoring', hash: '#power-monitoring' },
              { title: 'Battery Levels', hash: '#battery-levels' },
              { title: 'Automations', hash: '#automations' },
              { title: 'System', hash: '#system' },
              { title: 'Miscellaneous', hash: '#miscellaneous' },
              { title: 'All Entities', hash: '#all-entities' },
            ]}
          />
          <Column fullWidth gap='1rem' justifyContent='flex-start' className='dashboard-content'>
            <Dashboard />
          </Column>
        </Row>
      </ThemeProvider>
    </HassConnect>
  );
}

export default App;
