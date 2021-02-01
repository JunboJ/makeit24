import constants from "../constants";
import { Calculation } from "./calculation/Calculation";

export class Core {
  static getSolutions(numberList) {
    const operators = constants.operatorTypes;
    let pointer = 0;
    if (numberList.length < 2) {
      return numberList[0];
    }
    for (let i = pointer; i < numberList.length - 1; i++) {
      const num1 = numberList[i];
      const num2 = numberList[i + 1];
      const rest = numberList.filter((value) => value !== n1 && value !== n2);
      for (const key in operators) {
        try {
          let operatorLoopResult = [];
          operatorLoopResult.push(
            Calculation.do({ n1: num1, n2: num2, operator })
          );
          return this.getSolutions([...operatorLoopResult, ...rest]);
        } catch (e) {
          console.log("Error", e);
        }
      }
    }
  }
}
