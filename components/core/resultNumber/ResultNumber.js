import constants from "../../constants";
import { Calculation } from "../calculation/Calculation";
import { Number } from "../number/number";

export class ResultNumber extends Number {
    resultNumber;
    constructor(n1, n2, operator) {
        console.log('operator', operator);
        super();
        this.resultNumber = {
            type: constants.numberTypes.RESULT,
            originNumber1: n1,
            originNumber2: n2,
            operator: operator,
            number: Calculation.do({n1, n2, operator})
        }
    }

    getResultNumber() {
        return this.resultNumber;
    }
}