import constants from "../../constants";
import { ResultNumber } from "../resultNumber/ResultNumber";

export class Calculation {
    static do(set) {
        if (
            set.n1.type === constants.numberTypes.INITIAL &&
            set.n2.type === constants.numberTypes.INITIAL
        ) {
            throw Error(
                `Expecting origin or result numbers. Got ${set.n1.type} and ${set.n2.type}`
            );
        }
        switch (set.operator) {
            case constants.operatorTypes.ADD:
                return this.add(set);
            case constants.operatorTypes.SUB:
                return this.sub(set);
            case constants.operatorTypes.MUL:
                return this.mul(set);
            case constants.operatorTypes.DIV:
                return this.div(set);
            case constants.operatorTypes.DIVREV:
                return this.divrev(set);
            default:
                throw Error(
                    `Expect ${constants.operatorTypes.ADD}, ${constants.operatorTypes.SUB}, ${constants.operatorTypes.MUL} or ${constants.operatorTypes.DIV}. Given ${set.op}`
                );
        }
    }
    static add({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.ADD) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.ADD}, given ${operator}`
            );
        }
        const result = n1.number + n2.number;
        const resultNumber = new ResultNumber(n1, n2, operator, result)
        return resultNumber;
    }

    static sub({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.SUB) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.SUB}, given ${operator}`
            );
        }
        const result = n1.number - n2.number;
        const resultNumber = new ResultNumber(n1, n2, operator, result)
        return resultNumber;
    }

    static mul({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.MUL) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${operator}`
            );
        }
        const result = n1.number * n2.number;
        const resultNumber = new ResultNumber(n1, n2, operator, result)
        return resultNumber;
    }

    static div({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.DIV) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${operator}`
            );
        }

        if (n2.number === 0) {
            throw Error(`Denominator can not be 0`);
        }

        const hasRemainder = n1.number % n2.number === 0;

        if (hasRemainder) {
            const result = n1.number / n2.number;
            const resultNumber = new ResultNumber(n1, n2, operator, result)
            return resultNumber;
        }

        throw Error(`Calculation with operator ${operator} will end up remainder`);
    }

    static divrev({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.DIV) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${operator}`
            );
        }

        if (n1.number === 0) {
            throw Error(`Denominator can not be 0`);
        }

        const hasRemainder = n2.number % n1.number === 0;

        if (!hasRemainder) {
            const result = n2.number / n1.number;
            const resultNumber = new ResultNumber(n2, n1, operator, result)
            return resultNumber;
        }

        throw Error(`Calculation with operator ${operator} will end up remainder`);
    }
}
