import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ApiRepository } from "../services/api.repository";
import { Character } from "../models/character";
import { CharacterState, characterReducer } from "../reducers/reducer";
import * as ac from "../reducers/actions.creator";

export function useCharacter() {
  const initialState: CharacterState = {
    character: [],
  };

  const [characterState, dispatch] = useReducer(characterReducer, initialState);

  const url = "https://rickandmortyapi.com/api/character";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(url),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacter = await repo.getAll();
    const characterResults = loadedCharacter.results;
    // eslint-disable-next-line no-console
    console.log(characterResults);
    dispatch(ac.loadCharacterAction(characterResults));
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    character: characterState.character,
    handleLoad,
  };
}
