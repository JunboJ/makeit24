import constants from "../components/constants";
import { Calculation } from "./calculation/Calculation";
import { FinalResultNumber } from "./finalResultNumber/finalResultNumber";

export class Core {
    static solutions = [];

    static getSolutions(numberList) {
        this.solutions = [];
        this._getSolutions(numberList);
    }

    static _getSolutions(numberList) {
        const operators = constants.operatorTypes;
        let pointer = 0;

        while (pointer < numberList.length - 1) {
            for (let i = pointer; i < numberList.length - 1; i++) {

                // the two numbers that will be in the current calculation
                const n1 = numberList[pointer];
                const n2 = numberList[i + 1];

                // the rest of the numbers that is not in the current calculation
                const rest = numberList.filter((value) => value !== n1 && value !== n2);

                for (const key in operators) {
                    const operatorLoopResult = [];
                    const result = Calculation.do({ n1, n2, operator: operators[key] });

                    if (result) {
                        operatorLoopResult.push(result);
                    } else {
                        continue;
                    }

                    this._getSolutions([...operatorLoopResult, ...rest]);
                }
            }

            pointer++;
        }

        if (numberList.length === 1 && numberList[0].number === 24) {
            console.log('numberList[0]', numberList[0]);
            this.solutions.push(new FinalResultNumber(numberList[0]));
        }
    }

    static checkDuplicate(numberList) {
    }

}
