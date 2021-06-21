import React from "react";
import { StyleSheet, Text } from "react-native";
import Card from "../card/Card";
import constants from "../../constants/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { operatorRender } from "../../helpers/helpers";

const RecursiveCard = ({
  object,
  onPressHandler,
  active,
  showResult = true,
}) => {
  const showReverse = false;

  const recursiveOperandRender = ({ operands, operator, result }) => {
    console.log("result", result);
    let content = [];
    if (!showReverse && operator.charAt(0) === "r") {
      operands = operands.reverse();
      operator = operator.slice(-1);
    }

    let renderOperator = operatorRender(operator);
    showResult
      ? content.push(result)
      : operands.forEach((operand, index) => {
          const operandType = operand.type;
          if (operandType === constants.numberTypes.RESULT) {
            content.push(
              <Text key={`originNumber-${Math.random(3) * 1000}`}>
                {index === 1 ? <Text>{renderOperator}</Text> : null}
                <Text>{`(`}</Text>
                <Text>{recursiveOperandRender(operand.getExpression())}</Text>
                <Text>{`)`}</Text>
              </Text>
            );
          }
          if (operandType === constants.numberTypes.ORIGIN) {
            content.push(
              <Text key={`originNumber-${Math.random(3) * 1000}`}>{`${
                index === 1 ? renderOperator : ""
              }${operand.number}`}</Text>
            );
          }
        });
    return content;
  };

  const recursiveRender = (item) => {
    const itemType = item.type;

    // render a single number
    if (itemType === constants.numberTypes.ORIGIN) {
      return <Card type={itemType}>{item.number}</Card>;
    }

    // render a single operator
    if (Object.values(constants.operatorTypes).includes(itemType)) {
      return (
        <Card type={"operator"} style={styles.operatorCard}>
          {operatorRender(itemType)}
        </Card>
      );
    }

    // render a math expression
    const expression = item.getExpression();
    if (itemType === constants.numberTypes.FINAL) {
      return (
        <Card type={constants.numberTypes.FINAL}>
          {recursiveOperandRender({ ...expression, result: item.number })}
        </Card>
      );
    }
    if (itemType === constants.numberTypes.RESULT) {
      return (
        <Card type={itemType} key={`resultNumber-${Math.random()}`}>
          {recursiveOperandRender({ ...expression, result: item.number })}
        </Card>
      );
    }
  };

  return (
    <TouchableOpacity
      style={
        active
          ? { ...styles.recursiveCard, ...styles.activeCard }
          : styles.recursiveCard
      }
      onPress={() => onPressHandler(object)}
      activeOpacity={1}
    >
      {recursiveRender(object)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recursiveCard: {
    height: 75,
    width: "auto",
    minWidth: 55,
    margin: 10,
  },
  operatorCard: {
    borderColor: constants.colorPalette.rnSet3.lightRed,
  },
  activeCard: {
    transform: [{ scale: 1.2 }],
  },
});

export default RecursiveCard;
