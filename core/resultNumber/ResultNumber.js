import constants from "../../constants/constants";
import { Calculation } from "../calculation/Calculation";
import { Number } from "../number/number";

export class ResultNumber extends Number {
    operand1;
    operand2;
    operator;

    constructor(n1, n2, operator, result) {
        super();
        this.number = result ? result : Calculation.do({n1 ,n2, operator})
        this.type = constants.numberTypes.RESULT;
        this.operand1 = n1;
        this.operand2 = n2;
        this.operator = operator;
    }

    getExpression() {
        return {
            operands: [this.operand1, this.operand2],
            operator: this.operator
        }
    }
}