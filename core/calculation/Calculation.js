import constants from "../../constants/constants";

export class Calculation {
    static do(set) {
        const n1Type = set.n1.type;
        const n2Type = set.n2.type;
        if (
            n1Type === constants.numberTypes.INITIAL &&
            n2Type === constants.numberTypes.INITIAL
        ) {
            throw Error(
                `Expecting origin or result numbers. Got ${n1Type} and ${n2Type}`
            );
        }
        switch (set.operator) {
            case constants.operatorTypes.ADD:
                return this.add(set);
            case constants.operatorTypes.SUB:
                return this.sub(set);
            case constants.operatorTypes.SUBREV:
                return this.subrev(set);
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
        return result;
    }

    static sub({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.SUB) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.SUB}, given ${operator}`
            );
        }
        const result = n1.number - n2.number;
        return result;
    }

    static subrev({n1, n2, operator}) {
        if (operator !== constants.operatorTypes.SUBREV) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.SUBREV}, given ${operator}`
            );
        }
        const result =  n2.number - n1.number;
        return result;
    }

    static mul({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.MUL) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${operator}`
            );
        }
        const result = n1.number * n2.number;
        return result;
    }

    static div({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.DIV) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${operator}`
            );
        }

        if (n2.number === 0) {
            return;
            // throw Error(`Denominator can not be 0`);
        }

        const hasRemainder = n1.number % n2.number === 0;

        if (hasRemainder) {
            const result = n1.number / n2.number;
            return result;
        }
        return;
        throw Error(`Calculation with operator ${operator} will end up remainder`);
    }

    static divrev({ n1, n2, operator }) {
        if (operator !== constants.operatorTypes.DIVREV) {
            throw Error(
                `Wrong operator. Expecting ${constants.operatorTypes.DIVREV}, given ${operator}`
            );
        }

        if (n1.number === 0) {
            return;
            // throw Error(`Denominator can not be 0`);
        }

        const hasNoRemainder = n2.number % n1.number === 0;

        if (hasNoRemainder) {
            const result = n2.number / n1.number;
            return result;
        }

        return;
        // throw Error(`Calculation with operator ${operator} will end up remainder`);
    }
}
