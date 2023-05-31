import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiRepository } from "../services/api.repository";
import { Character } from "../models/character";

export function useCharacter() {
  const [character, setCharacter] = useState<Character[]>([]);

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacter = await repo.getAll();

    // eslint-disable-next-line no-console
    console.log(loadedCharacter);
    setCharacter(loadedCharacter.results);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    character,
    handleLoad,
  };
}
