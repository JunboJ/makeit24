import constants from "../../constants/constants";
import { Number } from "../number/number";

export class OriginNumber extends Number {
    constructor(num) {
        super();
        this.number = num ? num : 0;
        this.type = constants.numberTypes.ORIGIN
    }
}