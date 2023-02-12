import CharacterCard from "../CharacterCard/CharacterCard";
import Character from "../types/Character";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const FavouritesList = () => {
  const favourites = useSelector((state: RootState) => state.value);
  return (
    <div className="cards-container">
      {favourites.map((c: Character) => (
        <CharacterCard character={c} key={c.id} />
      ))}
    </div>
  );
};

export default FavouritesList;
