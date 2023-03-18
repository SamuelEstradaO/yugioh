import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import Home from "../views/home";
import Header from "../views/components/Header";
import List from "../views/list";

const Routes = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="list" element={<List />} />
        </Route>
    ))

    return (
        <RouterProvider router={router} />
    )
};

export default Routes;