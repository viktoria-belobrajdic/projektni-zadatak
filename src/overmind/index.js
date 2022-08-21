import {
  createStateHook,
  createActionsHook,
  createReactionHook,
} from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";

export const config = {
  state,
  actions,
};

export const useOvermindState = createStateHook();
export const useActions = createActionsHook();
export const useReaction = createReactionHook();
