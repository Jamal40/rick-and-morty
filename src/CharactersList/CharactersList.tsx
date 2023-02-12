import "./CharactersList.css";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { getAllCharacters } from "../queries";
import Character from "../types/Character";

const CharactersList = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(getAllCharacters, {
    variables: { page: page },
  });

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h2>Sorry, something went wrong</h2>;

  const characters = data.characters.results;
  return (
    <div className="cards-container">
      {characters.map((c: Character) => (
        <CharacterCard character={c} key={c.id} />
      ))}
    </div>
  );
};

export default CharactersList;
