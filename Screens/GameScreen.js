import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import CardContainer from "../components/cardContainer/CardContainer";
import constants from "../constants/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonCustom from "../components/buttonCustom/ButtonCustom";
import { ResultNumber } from "../core/resultNumber/ResultNumber";
import { Calculation } from "../core/calculation/Calculation";
import { Core } from "../core/Core";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const operators = [{ type: "+" }, { type: "-" }, { type: "*" }, { type: "/" }];

const GameScreen = ({ navigation }) => {
  const [list, setList] = useState(navigation.getParam("numberList"));
  const [operands, setOperands] = useState({ a: null, b: null });
  const [operator, setOperator] = useState({ type: null });
  const [inputStack, setInputStack] = useState([list]);
  const [resolutions, setResolutions] = useState([]);

  const times = '\u00d7'

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

  const getSolutionsHandler = () => {
    Core.getSolutions(list);
    const newSolutions = [...Core.solutions];
    setResolutions(newSolutions);
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
      <View style={styles.inGameControls}>
        <ButtonCustom
          colorTheme="blue"
          size="medium"
          onPressHandler={lastStepHandler}
        >
          <FontAwesome
            name="backward"
            size={24}
            color={constants.colorPalette.rnSet3.darkBlue}
          />
        </ButtonCustom>
        <ButtonCustom
          colorTheme="yellow"
          size="medium"
          onPressHandler={lastStepHandler}
        >
          <Entypo
            name="check"
            size={24}
            color={constants.colorPalette.rnSet3.darkYellow}
          />
        </ButtonCustom>
      </View>
      <View style={styles.answerStyle}>
        <ButtonCustom
          onPressHandler={getSolutionsHandler}
          fontSize={18}
          size='small'
          colorTheme="lightWarning"
        >
          <Ionicons name="bulb" size={18} color={constants.colorPalette.rnSet3.red} />
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
          colorTheme="lightWarning"
          size="small"
          style={styles.headerLeftButton}
          onPressHandler={onPress}
        >
          <MaterialCommunityIcons
            name="home"
            size={18}
            color={constants.colorPalette.rnSet3.red}
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
  inGameControls: {
    marginTop: 50,
    flexDirection: "row",
  },
  answerStyle: {
    position: "absolute",
    right: 50,
    bottom: 50,
  },
});

export default GameScreen;
