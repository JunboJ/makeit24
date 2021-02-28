import constants from "../../constants/constants";
import { OriginNumber } from "../originNumber/OriginNumber";

export class NumberList {
    min = 1;
    max = 14;
    numberList = [];

    constructor(list = []) {
        if (!!list.length) {
            this.numberList = list;
        }
    }

    listGenerator(type = constants.numberTypes.ORIGIN) {
        this.numberList = [];
        for (let i = 0; i < 4; i++) {
            if (type === constants.numberTypes.ORIGIN) {
                const randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.numberList.push(new OriginNumber(randomNumber));
            }
            if (type === constants.numberTypes.INITIAL) {
                this.numberList.push(new OriginNumber());
            }
        }
        return this.numberList;
    }
}