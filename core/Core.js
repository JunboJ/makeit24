import constants from "../constants/constants";
import { Calculation } from "./calculation/Calculation";
import { FinalResultNumber } from "./finalResultNumber/finalResultNumber";
import { ResultNumber } from "./resultNumber/ResultNumber";
import { OriginNumber } from './originNumber/OriginNumber';
export class Core {
    static solutions = [];
    static duplicateBuff = [];

    static getSolutions(numberList, checkDuplicate) {
        this.solutions = [];
        this._getSolutions(numberList, checkDuplicate);

        return this.solutions;
    }

    static _getSolutions(numberList, checkDuplicate = true) {
        this.duplicateBuff = [];
        
        let pointer = 0;
        let operators = null;

        if (numberList.length === 1 && numberList[0].number === 24) {
            this.solutions.push(new FinalResultNumber(numberList[0]));
        }

        while (pointer < numberList.length - 1) {
            for (let i = pointer; i < numberList.length - 1; i++) {
                const operatorResults = [];

                // the two numbers that will be in the current calculation
                const n1 = numberList[pointer];
                const n2 = numberList[i + 1];

                // the rest of the numbers that is not in the current calculation
                const rest = numberList.filter((value, idx) => idx !== pointer && idx !== (i + 1));

                if (checkDuplicate && n1.number === n2.number) {
                    operators = constants.mathOperatorTypes;
                } else {
                    operators = constants.operatorTypes;
                }

                for (const key in operators) {
                    if (checkDuplicate && this.isDuplicate(n1, n2, key)) {
                        continue;
                    }
                    
                    const result = Calculation.do({ n1, n2, operator: operators[key]});

                    if (result) {
                        operatorResults.push(new ResultNumber(n1, n2, operators[key], result));
                    }
                }

                operatorResults.forEach(res => {
                    this._getSolutions([res, ...rest]);
                });
            }

            pointer++;
        }
    }

    static isDuplicate(n1, n2, operator) {
        const isOrigin = n1 instanceof OriginNumber && n2 instanceof OriginNumber;
        const combination = `${n1.number}${operator}${n2.number}`;
        const combinationExist = this.duplicateBuff.includes(combination);

        if (!isOrigin) {
            return false;
        }

        if (!combinationExist) {
            this.duplicateBuff.push(combination);
            return false;
        }

        if (combinationExist) {
            return true;
        }
    }
}
