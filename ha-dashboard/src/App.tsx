import { ThemeProvider, SidebarCard, Row, Column } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import { lazy, Suspense, memo, Component } from 'react';
import type { ReactNode } from 'react';
import { appTheme } from './utils/theme';
import AppRoutes from './AppRoutes';
import { pageLoaderStyle } from './utils/styles';
import { TEXT } from './utils/textSnippets';

class ErrorBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error('Dashboard error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>{TEXT.error.title}</h2>
          <p>{TEXT.error.message}</p>
          <button onClick={() => this.setState({ hasError: false })}>{TEXT.error.tryAgain}</button>
        </div>
      );
    }
    return this.props.children;
  }
}

const Dashboard = lazy(() => import('./Dashboard'));

const App = memo(() => {
  const dashboardContentStyle = {
    padding: '0.75rem',
    overflowY: 'auto' as const,
    height: '100vh',
    maxWidth: '100%',
  };

  return (
    <HassConnect hassUrl={import.meta.env.VITE_HA_URL} hassToken={import.meta.env.VITE_HA_TOKEN}>
      <AppRoutes />
      <ThemeProvider darkMode={true} theme={appTheme}>
        <Row fullWidth wrap='nowrap' fullHeight alignItems='stretch'>
          <SidebarCard
            startOpen={true}
            weatherCardProps={{
              entity: 'weather.forecast_home'
            }}
          />
          <Column fullWidth gap='0.75rem' justifyContent='flex-start' className='dashboard-content' style={dashboardContentStyle}>
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className='loading' style={pageLoaderStyle.container}>
                    {TEXT.loading}
                  </div>
                }
              >
                <Dashboard />
              </Suspense>
            </ErrorBoundary>
          </Column>
        </Row>
      </ThemeProvider>
    </HassConnect>
  );
});

App.displayName = 'App';

export default App;
