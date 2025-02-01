import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2>{news.length} News Found in this Category.</h2>
            <div>
                news.map()
            </div>
        </div>
    );
};

export default CategoryNews;