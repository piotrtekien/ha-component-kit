import { Column } from '@hakit/components';
import { lazy, Suspense, useEffect, useState, useMemo } from 'react';
import { ROUTES } from './config/routes';
import { pageLoaderStyle } from './utils/styles';

const DEFAULT_HASH = '#overview';

const PAGE_COMPONENTS: Record<string, React.LazyExoticComponent<any>> = {
  '#overview': lazy(() => import('./pages/OverviewPage')),
  '#living-room': lazy(() => import('./pages/LivingRoomPage')),
  '#bedroom': lazy(() => import('./pages/BedroomPage')),
  '#automations': lazy(() => import('./pages/AutomationsPage')),
  '#system': lazy(() => import('./pages/SystemPage')),
  '#miscellaneous': lazy(() => import('./pages/MiscellaneousPage')),
  '#all-entities': lazy(() => import('./pages/AllEntitiesPage')),
};

const validateRoutes = () => {
  const routeHashes = ROUTES.map(route => route.hash);
  const componentHashes = Object.keys(PAGE_COMPONENTS);

  const missingComponents = routeHashes.filter(hash => !componentHashes.includes(hash));
  if (missingComponents.length > 0) {
    console.warn(`Warning: Some routes don't have matching components:`, missingComponents);
  }

  const missingRoutes = componentHashes.filter(hash => !routeHashes.includes(hash));
  if (missingRoutes.length > 0) {
    console.warn(`Warning: Some components don't have matching routes:`, missingRoutes);
  }
};

if (process.env.NODE_ENV !== 'production') {
  validateRoutes();
}

const LoadingIndicator = () => (
  <div className='page-loading' style={pageLoaderStyle.container}>
    <div className='loading-spinner' style={pageLoaderStyle.spinner}></div>
    <div>Loading page content...</div>
    <style>{`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
  </div>
);

function Dashboard() {
  const [currentHash, setCurrentHash] = useState<string | null>(null);

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = DEFAULT_HASH;
    } else {
      setCurrentHash(window.location.hash);
    }

    const handleHashChange = () => {
      const newHash = window.location.hash || DEFAULT_HASH;
      setCurrentHash(newHash);
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const CurrentPage = useMemo(() => {
    if (!currentHash) {
      return null;
    }
    const pageComponent = PAGE_COMPONENTS[currentHash as keyof typeof PAGE_COMPONENTS];
    return pageComponent || PAGE_COMPONENTS[DEFAULT_HASH];
  }, [currentHash]);

  if (!CurrentPage) {
    return <LoadingIndicator />;
  }

  return (
    <Column fullWidth gap='0.5rem'>
      <Suspense fallback={<LoadingIndicator />}>
        <CurrentPage />
      </Suspense>
    </Column>
  );
}

export default Dashboard;
