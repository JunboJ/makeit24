import constants from "../../constants";
import { Number } from "../number/number";

export class ResultNumber extends Number {
    resultNumber;
    constructor(n1, n2, operator, result) {
        super();
        this.resultNumber = {
            type: constants.numberTypes.RESULT,
            originNumber1: n1,
            originNumber2: n2,
            operator: operator,
            number: result
        }
    }

    getResultNumber() {
        return this.resultNumber;
    }
}