import homeIcon from '../assets/svg/home.svg';
import portfolioIcon from '../assets/svg/portfolio.svg';
import collaborateIcon from '../assets/svg/collaborate.svg';
import contactsIcon from '../assets/svg/contacts.svg';
import profileIcon from '../assets/svg/profile.svg';


export interface routeInterface {
    path: string;
    name: string;
    id: number;
    icon?: string;
}



export const routes : routeInterface[] = [
     {
        path: "/",
        name: "Homepage",
        id: 1,
        icon: homeIcon
    },
    {
        path: "/profile",
        name: "Profile",
        id: 5,
        icon: profileIcon
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        id: 2,
        icon: portfolioIcon
    },
    {
        path: "/collaborate",
        name: "Collaborate",
        id: 3,
        icon: collaborateIcon
    },
    {
        path: "/contacts",
        name: "Contacts",
        id: 4,
        icon: contactsIcon
    }
]


