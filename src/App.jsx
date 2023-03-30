import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsContextProvider from "./context/NewsContext";

function App() {
  return (
    <NewsContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </NewsContextProvider>
  );
}

export default App;
