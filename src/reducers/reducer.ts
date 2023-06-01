import { Character } from "../models/character";
import { CharacterAction } from "./actions.creator";
import { actionTypes } from "./action.types";

export type CharacterState = {
  character: Character[];
};

export const characterReducer = (
  state: CharacterState,
  action: CharacterAction
) => {
  let payload: Character[] | Character | number;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Character[];
      return { ...state, character: payload };

    default:
      return { ...state };
  }
};
