import Header from "../componets/Header";
import LetestNews from "../componets/LetestNews";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="container mx-auto">
                    <LetestNews></LetestNews>
                </section>
            </header>
            <nav>

            </nav>
            <main>

            </main>
        </div>
    );
};

export default HomeLayout;