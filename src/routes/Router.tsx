import { ROUTER_PATH } from '@/constants/constants';
import Layout from '@/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = () => {
  const { HOME, PROJECT, STUDY } = ROUTER_PATH;
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          //element: <HomePage />, // 기본 경로에 보여줄 컴포넌트 (예: HomePage)
        },
        {
          path: HOME,
          //element: <HomePage/>
        },
        {
          path: STUDY,
          //element: <StudyPage/>
        },
        {
          path: PROJECT,
          //element: <ProjectPage/>
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
