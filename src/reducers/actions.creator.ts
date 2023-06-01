import { Character } from "../models/character";
import { actionTypes } from "./action.types";

type Keys = keyof typeof actionTypes;

export type CharacterAction = {
  type: (typeof actionTypes)[Keys];
  payload: Character[] | Character | number;
};

export function loadCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.load,
    payload,
  };
}
