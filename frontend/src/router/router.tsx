import AppBarLayout from "../layouts/AppBarLayout";
import {lazy, Suspense} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import('../pages/Home')))
const PageOne = Loadable(lazy(() => import('../pages/PageOne')))
const NotFound = Loadable(lazy(() => import('../pages/NotFound')))

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <AppBarLayout/>,
      children: [
        {element: <Navigate to="/home" replace/>, index: true},

        {path: '/home', element: <Home/>},
        {path: '/page1', element: <PageOne/>},
      ],
    },
    {
      path: '*',
      element: <AppBarLayout/>,
      children: [
        {path: '404', element: <NotFound/>},
        {path: '*', element: <Navigate to="/404" replace/>},
      ],
    },
    {path: '*', element: <Navigate to="/404" replace/>},
  ]);
}
