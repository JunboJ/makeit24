export class GameScreenActions {
  SET_HISTORY_STEP = "SET_HISTORY_STEP";
  SET_HISTORY_STEP_SUCCESS = 'SET_HISTORY_STEP_SUCCESS';

  setHistoryStep(payload) {
    return {
      error: false,
      payload,
      type: GameScreenActions.SET_HISTORY_STEP,
    };
  }

  setHistoryStepSuccess(payload) {
      return {
          error: false,
          payload,
          type: GameScreenActions.SET_HISTORY_STEP_SUCCESS
      }
  }
}
