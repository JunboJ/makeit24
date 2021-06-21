import constants from "../constants/constants";

export const operatorRender = (operator) => {
  switch (operator) {
    case constants.operatorTypes.DIV:
    case constants.operatorTypes.DIVREV:
      return "\u00F7";
    case constants.operatorTypes.MUL:
      return "\u00D7";
    case constants.operatorTypes.SUB:
    case constants.operatorTypes.SUBREV:
      return "\u2212";
    case constants.operatorTypes.ADD:
      return "\u002B";
  }
};
