import { Link, NavLink } from "react-router-dom";
import userIcons from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center py-4">
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-4 items-center">
                <div className="">
                    <img className="rounded-full" src={userIcons} alt="" />
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className="btn btn-neutral rounded-none">LogOut
                    </button> : <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;