import { GameScreenActions } from "../actions";

const initialState = {
  history: "none",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GameScreenActions.SET_HISTORY_STEP_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
