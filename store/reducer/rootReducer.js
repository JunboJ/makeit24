import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import reducer from "../../screens/GameScreen/reducer";
import { GameScreenSagas } from "../../screens/GameScreen/saga";

console.log("GameScreenReducer.reducer", reducer);

export const createRootReducer = () => {
  return combineReducers({
    game: reducer,
  });
};

export function* rootSaga() {
  yield all(GameScreenSagas.GAME_SCREEN_SAGA_FORK);
}
