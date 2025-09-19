import  { useRoutes } from 'react-router';
import App from '../App';

const routings = [
    { path: "/", element: <App /> },
    { path: "/check", element: <div>Check Page</div> },
    { path: "*", element: <div>Not Found</div> }
  ]

const RoutingSystem = () => {
  const routing = useRoutes(routings);
  return routing;
}

export default RoutingSystem;