import { useRoutes } from "react-router";
import App from "../App";
import Collaborate from "../pages/ContactMe";
import { Portfolio } from "../pages/Portfolio";
import { ProjectDetails } from "../components/sections/ProjectDetails";
import { Profile } from "../pages/Profile";
import ContactMePage from "../pages/ContactMe";

const routings = [
  { path: "/", element: <App /> },
  { path: "collaborate", element: <Collaborate /> },
  { path: "*", element: <div>Not Found</div> },
  {
    path: "portfolio",
    element: <Portfolio />,
    children: [
      {
        path: ":label",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "contact",
    element: <ContactMePage />,
  },
];

const RoutingSystem = () => {
  const routing = useRoutes(routings);
  return routing;
};

export default RoutingSystem;
