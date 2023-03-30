import NewsCard from "./NewsCard";
import Container from "../components/Container";
import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const NewsContainer = () => {
  const { articles } = useContext(NewsContext);

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
