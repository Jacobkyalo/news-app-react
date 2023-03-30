import { useContext } from "react";
import NewsContainer from "../components/NewsContainer";
import { NewsContext } from "../context/NewsContext";

const Homepage = () => {
  const { loading } = useContext(NewsContext);
  return (
    <div className="px-3">
      {loading ? (
        <h2 className="text-center text-[24px] mt-6">Loading news feed...</h2>
      ) : (
        <NewsContainer />
      )}
    </div>
  );
};

export default Homepage;
