import  { useRoutes } from 'react-router';
import App from '../App';
import Collaborate from '../pages/Collaborate';

const routings = [
    { path: "/", element: <App /> },
    { path: "/check", element: <div>Check Page</div> },
    { path: "/collaborate", element: <Collaborate /> },
    { path: "*", element: <div>Not Found</div> }
  ]

const RoutingSystem = () => {
  const routing = useRoutes(routings);
  return routing;
}

export default RoutingSystem;