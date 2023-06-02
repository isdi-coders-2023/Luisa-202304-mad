import { Character } from "../models/character";
import { actionTypes } from "./action.types";

type Keys = keyof typeof actionTypes;

export type CharacterAction = {
  type: (typeof actionTypes)[Keys];
  payload: Character[] | Character | number | string;
};

export function loadCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.load,
    payload,
  };
}

export function NextCharacterAction(payload: string): CharacterAction {
  return {
    type: actionTypes.next,
    payload,
  };
}

export function PreviousCharacterAction(payload: string): CharacterAction {
  return {
    type: actionTypes.previous,
    payload,
  };
}
