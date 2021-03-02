import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CardContainer from "../components/cardContainer/CardContainer";
import constants from "../constants/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonCustom from "../components/buttonCustom/ButtonCustom";
import { ResultNumber } from "../core/resultNumber/ResultNumber";
import { Calculation } from "../core/calculation/Calculation";
import { FontAwesome } from "@expo/vector-icons";

const operators = [{ type: "+" }, { type: "-" }, { type: "*" }, { type: "/" }];

const GameScreen = ({ navigation }) => {
  const [list, setList] = useState(navigation.getParam("numberList"));
  const [operands, setOperands] = useState({ a: null, b: null });
  const [operator, setOperator] = useState({ type: null });
  const [inputStack, setInputStack] = useState([list]);

  console.log("==========inputStack", inputStack);

  const numberOnPressHandler = (numObject) => {
    if (operands.a === numObject) {
      return setOperands({
        a: null,
        b: operands.b,
      });
    }
    if (operands.b === numObject) {
      return setOperands({
        a: operands.a,
        b: null,
      });
    }
    if (operands.a === null) {
      return setOperands({
        a: numObject,
        b: operands.b,
      });
    }
    if (operands.b === null) {
      return setOperands({
        a: operands.a,
        b: numObject,
      });
    }
    if (operands.a && operands.b) {
      return setOperands({
        a: operands.a,
        b: numObject,
      });
    }
  };

  const operatorOnPressHandler = (operatorObj) => {
    if (operatorObj === operator) {
      return setOperator({ type: null });
    }
    return setOperator(operatorObj);
  };

  const lastStepHandler = () => {
    const copyStack = [...inputStack];

    if (inputStack.length > 1) {
      copyStack.pop();
    }

    let lastStep = copyStack.slice(-1);

    setInputStack([...copyStack]);
    setList([...lastStep[0]]);
  };

  const resetGameHandler = () => {
    const initialStep = inputStack[0];
    setList(initialStep);
  };

  const resetActive = () => {
    setOperands({ a: null, b: null });
    setOperator({ type: null });
  };

  useEffect(() => {
    if (operands.a !== null && operands.b !== null && operator.type !== null) {
      const rest = list.filter((val) => {
        return val !== operands.a && val !== operands.b;
      });
      const result = Calculation.do({
        n1: operands.a,
        n2: operands.b,
        operator: operator.type,
      });
      if (!result) {
        return resetActive();
      }
      const newNumber = new ResultNumber(operands.a, operands.b, operator.type);
      setInputStack([...inputStack, [newNumber, ...rest]]);
      setList([newNumber, ...rest]);
      resetActive();
    }
  }, [operands, operator]);

  return (
    <View style={styles.gameScreen}>
      <CardContainer
        items={list}
        onPressHandler={numberOnPressHandler}
        activeItem={operands}
        name="operands"
      />
      <CardContainer
        onPressHandler={operatorOnPressHandler}
        items={operators}
        activeItem={operator}
        name="operator"
      />
      <View>
        <ButtonCustom
          colorTheme="blue"
          size="small"
          onPressHandler={lastStepHandler}
        >
          <FontAwesome
            name="backward"
            size={18}
            color={constants.colorPalette.rnSet3.white}
          />
        </ButtonCustom>
      </View>
    </View>
  );
};

GameScreen.navigationOptions = (options) => {
  return {
    title: "",
    headerLeft: ({ onPress }) => {
      return (
        <ButtonCustom
          colorTheme="red"
          size="small"
          style={styles.headerLeftButton}
          onPressHandler={onPress}
        >
          <MaterialCommunityIcons
            name="home"
            size={20}
            color={constants.colorPalette.rnSet3.white}
          />
        </ButtonCustom>
      );
    },
  };
};

const styles = StyleSheet.create({
  gameScreen: {
    backgroundColor: constants.colorPalette.rnSet3.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeftButton: {
    marginLeft: 20,
  },
});

export default GameScreen;
