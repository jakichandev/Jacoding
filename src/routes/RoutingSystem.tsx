import  { useRoutes } from 'react-router';
import App from '../App';
import Collaborate from '../pages/Collaborate';
import { Portfolio } from '../pages/Portfolio';
import { ProjectDetails } from '../components/ProjectDetails';

const routings = [
    { path: "/", element: <App /> },
    { path: "collaborate", element: <Collaborate /> },
    { path: "*", element: <div>Not Found</div> },
    { path: "portfolio", element: <Portfolio />, children: [
      {
        path: ":label",
        element: <ProjectDetails />
      }
    ]}
  ]

const RoutingSystem = () => {
  const routing = useRoutes(routings);
  return routing;
}

export default RoutingSystem;