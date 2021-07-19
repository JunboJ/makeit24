import constants from "../../constants/constants";
import { OriginNumber } from "../originNumber/OriginNumber";

export class NumberList {
    min = 1;
    max = 14;
    givenList = [];
    numberList = [];

    constructor(list = []) {
        if (list.length) {
            this.givenList = list;
        }
    }

    generateList(list) {
        if (!list && !this.givenList) {
            throw new Error('Expect parameter 1 to be an array of numbers');
        }
        
        this.numberList = [];

        if (list && list.length) {
            this.givenList = list;
        }

        for (let i = 0; i < 4; i++) {
            if (this.givenList.length) {
                this.numberList.push(new OriginNumber(this.givenList[i]));
                continue;
            }
        }

        return this.numberList;
    }

    generateRandomList(type = constants.numberTypes.ORIGIN) {
        this.numberList = [];
        for (let i = 0; i < 4; i++) {
            if (type === constants.numberTypes.ORIGIN) {
                const randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.numberList.push(new OriginNumber(randomNumber));

                continue;
            }
            
            if (type === constants.numberTypes.INITIAL) {
                this.numberList.push(new OriginNumber(0));
                
                continue;
            }
        }

        return this.numberList;
    }
}