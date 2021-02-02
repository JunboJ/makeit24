import constants from "../../constants";
import { OriginNumber } from "../originNumber/OriginNumber";

export class NumberList {
    min = 1;
    max = 14;
    numberList;

    constructor(list = []) {
        if (!!list.length) {
            this.numberList = list;
            return;
        }
        this.numberList = this.listGenerator(constants.numberTypes.INITIAL);
    }

    listGenerator(type = constants.numberTypes.ORIGIN) {
        const newNumberList = [];
        for (let i = 0; i < 4; i++) {
            if (type === constants.numberTypes.ORIGIN) {
                const randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
                const originNumber = new OriginNumber(randomNumber);
                newNumberList.push(originNumber.getNumber());
            }
            if (type === constants.numberTypes.INITIAL) {
                const initialNumber = new OriginNumber();
                newNumberList.push(initialNumber.getNumber());
            }
        }
        console.log('initial numbers', newNumberList);
        return newNumberList;
    }
}