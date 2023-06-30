import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

import { MainLayout } from '@/components/layout/MainLayout';
import { PlanBuilderRoutes } from '@/features/plan-builder';

// import { lazyImport } from '@/utils/lazyImport';

// const { DiscussionsRoutes } = lazyImport(
//   () => import('@/features/discussions'),
//   'DiscussionsRoutes'
// );

// const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
// const { Profile } = lazyImport(() => import('@/features/users'), 'Profile');
// const { Users } = lazyImport(() => import('@/features/users'), 'Users');

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    element: <App />,
    children: [
      { path: '/sales-orders', element: <div>sales - orders - page</div> },
      { path: '/work-center', element: <div>work - center - page</div> },
      { path: '/scheduler', element: <div>scheduler - page</div> },
      { path: '/plan-builder', element: <PlanBuilderRoutes></PlanBuilderRoutes> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];