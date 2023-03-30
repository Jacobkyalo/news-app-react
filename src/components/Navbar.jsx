import { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";
import Container from "./Container";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const { apiKey, setUrl, searchText, setSearchText } = useContext(NewsContext);

  const handleNewsSearch = (e) => {
    e.preventDefault();
    setUrl(`https://api.currentsapi.services/v1/search?apiKey=${apiKey}`);
    setSearchText("");
  };
  return (
    <header className="w-full">
      <Container>
        <nav className="w-full flex justify-between items-center py-4 ">
          <h2 className="text-slate-900 font-bold text-2xl">
            NE<span className="text-blue-500">W</span>S.
          </h2>
          <form
            className="flex justify-center items-center"
            onSubmit={handleNewsSearch}
          >
            <input
              type="text"
              placeholder="Search news"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border-2 border-slate-800 placeholder:text-slate-900 rounded-full py-1 px-4 outline-none text-slate-900 text-[15px] bg-transparent"
            />
            <BiSearch
              type="submit"
              size={26}
              className="text-slate-900 ml-3 cursor-pointer"
              onClick={handleNewsSearch}
            />
          </form>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
