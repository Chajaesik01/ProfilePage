import { ROUTER_PATH } from '@/constants/constants';
import Layout from '@/layout';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import StudyPage from '@/pages/StudyPage';
import ProjectPage from '@/pages/ProjectPage';
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
