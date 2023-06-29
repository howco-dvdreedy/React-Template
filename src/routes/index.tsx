import { useRoutes } from 'react-router-dom';

// import { Landing } from '../features/misc/pages/landing';
// import { useAuth } from '@/lib/auth';

import { protectedRoutes } from './protected';
// import { publicRoutes } from './public';

export const AppRoutes = () => {
   //   const auth = useAuth();

   //   const routes = auth.user ? protectedRoutes : publicRoutes;

   //   const element = useRoutes([...routes, ...commonRoutes]);
   const element = useRoutes([...protectedRoutes]);

   return <>{element}</>;
};
