import constants from "../../constants/constants";
import { ResultNumber } from "../resultNumber/ResultNumber";

export class FinalResultNumber extends ResultNumber {
    constructor(resultNumber) {
        super(
            n1 = resultNumber.operand1,
            n2 = resultNumber.operand2,
            operator = resultNumber.operator,
            result = resultNumber.number
        );
        this.type = constants.numberTypes.FINAL
    }
}