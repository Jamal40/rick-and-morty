import "./App.css";
import CharactersList from "./CharactersList/CharactersList";
import NavBar from "./NavBar/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import FavouritesList from "./FavouritesList/FavouritesList";
const App = () => {
  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/favourites" element={<FavouritesList />} />
      </Routes>
    </div>
  );
};

export default App;
