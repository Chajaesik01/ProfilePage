import { ROUTER_PATH } from '@/constants/constants';
import Layout from '@/layout';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { HomePage, ProjectPage, StudyPage, NotFoundPage } from '@/pages';
const Router = () => {
  const { HOME, PROJECT, STUDY } = ROUTER_PATH;
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={HOME} replace />,
        },
        {
          path: HOME,
          element: <HomePage />,
        },
        {
          path: STUDY,
          element: <StudyPage />,
        },
        {
          path: PROJECT,
          element: <ProjectPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
