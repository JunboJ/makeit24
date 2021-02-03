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
        // console.log('get solution begin');
        const operators = constants.operatorTypes;
        let pointer = 0;
        // console.log('pointer', pointer);
        while (pointer < numberList.length - 1) {
            // console.log('###while loop pointer', pointer);
            for (let i = pointer; i < numberList.length - 1; i++) {
                const n1 = numberList[pointer];
                const n2 = numberList[i + 1];
                const rest = numberList.filter((value) => value !== n1 && value !== n2);
                for (const key in operators) {
                    // console.log('[for loop 2 key]', key);
                    const operatorLoopResult = [];
                    const result = Calculation.do({ n1, n2, operator: operators[key] });
                    if (result) {
                        operatorLoopResult.push(result);
                    } else {
                        continue;
                    }
                    // console.log('[for loop 2 try catch]', [...operatorLoopResult, ...rest]);

                    this._getSolutions([...operatorLoopResult, ...rest]);
                }
            }
            pointer++;
        }
        if (numberList.length === 1 && numberList[0].number === 24) {
            this.solutions.push(new FinalResultNumber(numberList[0]));
        }
    }
}
