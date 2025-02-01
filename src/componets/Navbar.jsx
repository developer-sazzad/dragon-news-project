import { NavLink } from "react-router-dom";
import userIcons from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-4">
            <div className=""></div>
            <div className="nav space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-4 items-center">
                <div className="">
                    <img src={userIcons} alt="" />
                </div>
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;