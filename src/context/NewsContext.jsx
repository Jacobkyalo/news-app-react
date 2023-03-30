import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const NewsContext = createContext(null);
const NewsContextProvider = ({ children }) => {
  const apiKey = import.meta.env.VITE_REACT_API_KEY;
  const initialURL = `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`;

  const [articles, setArticles] = useState([]);
  const [url, setUrl] = useState(initialURL);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchArticles = async () => {
    setLoading(true);
    const res = await axios.get(url);
    const data = await res.data;
    setArticles(data.news);
    console.log(data.news);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, [url, searchText]);

  const values = {
    articles,
    loading,
    setUrl,
    apiKey,
    searchText,
    setSearchText,
  };
  return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
