import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-gray-200">
            <header className="container mx-auto">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;