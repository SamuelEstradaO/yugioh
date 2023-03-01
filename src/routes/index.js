import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import Banner from "../views/components/Banner";
import Home from "../views/home";

const Routes = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Banner />}>
            <Route index element={<Home />} />
        </Route>
    ))

    return (
        <RouterProvider router={router} />
    )
};

export default Routes;