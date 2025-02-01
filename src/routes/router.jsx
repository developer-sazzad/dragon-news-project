import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/login',
        element: <h1>Login</h1>
    }, {
        path: '*',
        element: <h1>Error Page</h1>
    }
])

export default router;