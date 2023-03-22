import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import Home from "../views/home";
import Header from "../views/components/Header";
import List from "../views/list";
import CardInfo from "../views/cardInfo";

const Routes = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="list">
                <Route index element={<List />} />
                <Route path="details" element={<CardInfo />} />
            </Route>
        </Route>
    ))

    return (
        <RouterProvider router={router} />
    )
};

export default Routes;