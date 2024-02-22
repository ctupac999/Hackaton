import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home.jsx"; //importar todas las paginas
import Favorites from "../Pages/Favorites.jsx";
import Catalogue from '../Pages/Catalogue.jsx'
import Details from '../Pages/Details.jsx'
import Contact from '../Pages/Contact.jsx'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/favorites",
        element: <Favorites/>
    },
    {
        path: "/catalogue",
        element: <Catalogue/>
    },
    {
        path: "/details",
        element: <Details/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },


]);