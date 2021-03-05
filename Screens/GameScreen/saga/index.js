import { call, putResolve, takeLatest } from "redux-saga/effects";
import { GameScreenActions } from "../actions";

export class GameScreenSagas {
  GAME_SCREEN_SAGA_FORK = [takeLatest(GameScreenActions.SET_HISTORY_STEP)];

  *setHistoryStepAPICall(action) {
    const param = action.payload;

    try {
      const response = yield call(() => {
        // make api call here
      }, param);

      if (response) {
        yield putResolve(GameScreenSagas.setHistoryStepAPICallSuccessActionCreator);
      }
    } catch (error) {
      console.log("error", error);
      // yield call(ErrorHandlingServices.ErrorActionService, error);
    }
  }

  *setHistoryStepAPICallSuccessActionCreator() {
    return GameScreenActions.setHistoryStepSuccess;
  }
}
