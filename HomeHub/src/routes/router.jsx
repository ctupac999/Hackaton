import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home"; //importar todas las paginas
import Favorites from "../Pages/Favorites";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/favorites",
        element: <Favorites/>
    },

]);