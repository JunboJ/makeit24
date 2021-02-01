import constants from "../../constants";
import { OriginNumber } from "../originNumber/OriginNumber";

export class NumberList {
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
          const newNumber = OriginNumber.generateNumber(type);
          newNumberList.push(newNumber);
        }
        return newNumberList;
    }
}