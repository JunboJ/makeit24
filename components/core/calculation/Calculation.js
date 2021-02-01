import constants from "../../constants";

export class Calculation {
    static do(set) {
        console.log('set', set);
        if (!(set.n1.type === constants.numberTypes.ORIGIN && set.n2.type === constants.numberTypes.ORIGIN)) {
            throw Error(`Expecting origin numbers. Got ${set.n1.type} and ${set.n2.type}`)
        }
        switch (set.op) {
            case constants.operatorTypes.ADD:
                this.add(set);
                break;
            case constants.operatorTypes.SUB:
                this.sub(set);
                break;
            case constants.operatorTypes.MUL:
                this.mul(set);
                break;
            case constants.operatorTypes.DIV:
                this.div(set);
                break;
            default:
                throw Error(`Expect ${constants.operatorTypes.ADD}, ${constants.operatorTypes.SUB}, ${constants.operatorTypes.MUL} or ${constants.operatorTypes.DIV}. Given ${set.op}`)
        }
    }
    static add({ n1, n2, op }) {
        if (op !== constants.operatorTypes.ADD) {
            throw Error(`Wrong operator. Expecting ${constants.operatorTypes.ADD}, given ${op}`)
        }

        return n1.number + n2.number;
    }

    static sub({ n1, n2, op }) {
        if (op !== constants.operatorTypes.SUB) {
            throw Error(`Wrong operator. Expecting ${constants.operatorTypes.SUB}, given ${op}`)
        }

        return n1.number - n2.number;
    }

    static mul({ n1, n2, op }) {
        if (op !== constants.operatorTypes.MUL) {
            throw Error(`Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${op}`)
        }

        return n1.number * n2.number;
    }

    static div({ n1, n2, op }) {
        if (op !== constants.operatorTypes.DIV) {
            throw Error(`Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${op}`)
        }

        if (n2.number === 0) {
            throw Error(`Denominator can not be 0`);
        }

        return n1.number / n2.number;
    }
}