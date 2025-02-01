import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetestNews = () => {
    return (
        <div className="bg-gray-300 flex gap-3 items-center p-2">
            <p className="bg-[#D72050] px-3 py-1 text-xl font-medium text-white rounded">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-3">
                <Link to='/news'> I can be a React component, multiple React components, or just some text.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, beatae.</Link>
            </Marquee>
        </div>
    );
};

export default LetestNews;