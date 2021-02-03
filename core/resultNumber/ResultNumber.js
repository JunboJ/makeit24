import constants from "../../components/constants";
import { Number } from "../number/number";

export class ResultNumber extends Number {
    operand1;
    operand2;
    operator;

    constructor(n1, n2, operator, result) {
        super();
        this.type = constants.numberTypes.RESULT;
        this.number = result;
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