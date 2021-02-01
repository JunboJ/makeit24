import constants from "../../constants";
import { Number } from "../number/number";

export class OriginNumber extends Number {
    static number = 0;
    static min = 1;
    static max = 14;

    static generateNumber(type) {
        if (type === constants.numberTypes.ORIGIN) {
            this.number = Math.floor(Math.random() * (this.max - this.min) + this.min)
        }

        return {
            type: type,
            number: this.number
        }
    }

    static newOriginNumber(num) {
        return {
            type: constants.numberTypes.ORIGIN,
            number: num
        }
    }
}