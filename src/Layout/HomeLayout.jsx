import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
import LeftNavbar from "../componets/layout-component/LeftNavbar";
import RightNavbar from "../componets/layout-component/RightNavbar";
import LetestNews from "../componets/LetestNews";
import Navbar from "../componets/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-openSans">
            <header>
                <Header></Header>
                <section className="container mx-auto">
                    <LetestNews></LetestNews>
                </section>
            </header>
            <nav className="container mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="container mx-auto grid gap-8 md:grid-cols-12">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;