import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/home/Home';
import GiphyList from '../pages/giphy/Giphy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GiphyList />,
      },
    ],
  },
]);

export default router;
