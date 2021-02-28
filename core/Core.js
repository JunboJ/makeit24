import constants from "../constants/constants";
import { Calculation } from "./calculation/Calculation";
import { FinalResultNumber } from "./finalResultNumber/finalResultNumber";
import { ResultNumber } from "./resultNumber/ResultNumber";

export class Core {
    static solutions = [];
    static operators = constants.operatorTypes;

    static getSolutions(numberList) {
        this.solutions = [];
        this._getSolutions(numberList);
    }

    static _getSolutions(numberList) {
        let pointer = 0;

        if (numberList.length === 1 && numberList[0].number === 24) {
            this.solutions.push(new FinalResultNumber(numberList[0]));
        }

        while (pointer < numberList.length - 1) {
            for (let i = pointer; i < numberList.length - 1; i++) {

                // the two numbers that will be in the current calculation
                const n1 = numberList[pointer];
                const n2 = numberList[i + 1];

                const operatorResults = [];
                // the rest of the numbers that is not in the current calculation
                const rest = numberList.filter((value) => value !== n1 && value !== n2);

                for (const key in this.operators) {
                    const result = Calculation.do({ n1, n2, operator: this.operators[key] });

                    if (result) {
                        const newResultNumber = new ResultNumber(n1, n2, this.operators[key], result);
                        operatorResults.push(newResultNumber);
                        // this._getSolutions([newResultNumber, ...rest]);
                    }
                }

                operatorResults.forEach(res => {
                    this._getSolutions([res, ...rest]);
                });
            }

            pointer++;
        }
    }

    static checkDuplicate(numberList) {
    }

}
