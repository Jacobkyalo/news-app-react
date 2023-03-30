import { Link } from "react-router-dom";
import news from "../assets/news.jpg";

const NewsCard = ({ article }) => {
  return (
    <Link to={`${article.url}`}>
      <div className="w-full bg-blue-200 rounded-none mb-4">
        <div className="flex justify-center items-center px-3 overflow-hidden p-3">
          <div className="mr-5">
            <img
              src={article?.image ? article.image : news}
              alt="noimage"
              loading="lazy"
              width="400"
              height="200"
              className="object-cover rounded-md"
            />
          </div>
          <div className="self-center">
            <div className="flex justify-between items-center mb-2">
              <h1 className="bg-blue-500 text-blue-50 font-bold text-[12px] p-1 rounded-[3px]">
                {article.author}
              </h1>
              <p className="text-slate-900 font-bold text-[12px]">
                {article.published}
              </p>
            </div>
            <h2 className="text-slate-900 font-[900] text-[15px] leading-6 mb-2">
              {article.title}
            </h2>
            <p className="text-slate-900 font-normal text-[13px] leading-[1.2]">
              {article.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
