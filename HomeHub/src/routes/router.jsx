import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home.jsx"; //importar todas las paginas
import Details from '../Pages/Details.jsx'
import Contact from '../Pages/Contact.jsx'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
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