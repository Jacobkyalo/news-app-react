// import { articles } from "../data";
import NewsCard from "./NewsCard";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsContainer = () => {
  const [articles, setArticles] = useState([]);

  const apiKey = import.meta.env.VITE_REACT_API_KEY;

  const url = `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`;
  const fetchArticles = async () => {
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data);
    setArticles(data.news);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <div className="mt-16 w-full">
        {articles?.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </Container>
  );
};

export default NewsContainer;
