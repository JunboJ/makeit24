import constants from "../../constants";
import { Number } from "../number/number";

export class OriginNumber extends Number {
    objNumber;

    constructor(num) {
        super();
        this.number = num ? num : 0;
        this.objNumber = {
            type: constants.numberTypes.ORIGIN,
            number: this.number
        }
    }

    getNumber() {
        return this.objNumber;
    }
}