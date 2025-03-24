import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/slices/rickandmorty";
import { CharacterCard } from "./CharacterCard";

export const MainCharacters = () => {
  const dispatch = useDispatch();
  const { isLoading, characters } = useSelector(state => state.characters)

  useEffect(() => {
    dispatch(getCharacters("1,2,3,4,5"));
  }, []);

  return (
    <div className="container p-4">
      <h1>Main characters</h1>
      <span>{ isLoading ? 'Loading...' : '' }</span>
      <CharacterCard characters={characters} />
    </div>
  );
};
