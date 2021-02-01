import constants from "../../constants";

export class Calculation {
  static do(set) {
    console.log("set info", set);
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

    return n1.number + n2.number;
  }

  static sub({ n1, n2, operator }) {
    if (operator !== constants.operatorTypes.SUB) {
      throw Error(
        `Wrong operator. Expecting ${constants.operatorTypes.SUB}, given ${operator}`
      );
    }

    return n1.number - n2.number;
  }

  static mul({ n1, n2, operator }) {
    if (operator !== constants.operatorTypes.MUL) {
      throw Error(
        `Wrong operator. Expecting ${constants.operatorTypes.MUL}, given ${operator}`
      );
    }
    console.log("mul", n1, n2, n1.number * n2.number);
    return n1.number * n2.number;
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

    return n1.number / n2.number;
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

    return  n2.number / n1.number;
  }
}
