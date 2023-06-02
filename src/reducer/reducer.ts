import { Character } from "../models/character";
import { CharacterAction } from "./actions.creator";
import { actionTypes } from "./action.types";

export type CharacterState = {
  character: Character[];
  next: string;
  prev: string;
};

export const characterReducer = (
  state: CharacterState,
  action: CharacterAction
) => {
  let payload: Character[] | Character | number | string;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Character[];
      return { ...state, character: payload };

    case actionTypes.next:
      payload = action.payload as string;
      return { ...state, next: payload };

    case actionTypes.previous:
      payload = action.payload as string;
      return { ...state, prev: payload };

    default:
      return { ...state };
  }
};
