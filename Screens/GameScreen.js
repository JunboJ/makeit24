import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CardContainer from "../components/cardContainer/CardContainer";
import constants from "../constants/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonCustom from "../components/buttonCustom/ButtonCustom";
import { ResultNumber } from "../core/resultNumber/ResultNumber";

const operators = [{ type: "+" }, { type: "-" }, { type: "*" }, { type: "/" }];

const GameScreen = ({ navigation }) => {
  const [list, setList] = useState(navigation.getParam("numberList"));
  const [operands, setOperands] = useState({ a: null, b: null });
  const [operator, setOperator] = useState({ type: null });

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
      console.log('###', operatorObj);
    if (operator.type) {
      return setOperator({type: null});
    }
    return setOperator(operatorObj);
  };

  const reset = () => {
    setOperands({ a: null, b: null });
    setOperator({ type: null });
  };

  useEffect(() => {
    if (operands.a !== null && operands.b !== null && operator.type !== null) {
      const rest = list.filter((val) => {
        return val !== operands.a && val !== operands.b;
      });
      const newNumber = new ResultNumber(operands.a, operands.b, operator.type);
      setList([newNumber, ...rest]);
      reset();
    }
  }, [operands, operator]);

  return (
    <View style={styles.gameScreen}>
      <CardContainer
        items={list}
        onPressHandler={numberOnPressHandler}
        activeItem={operands}
      />
      <CardContainer
        onPressHandler={operatorOnPressHandler}
        items={operators}
        activeItem={operator}
      />
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
          dimension={{ heightY: 45, heightZ: 5 }}
          style={styles.headerLeftButton}
          onPressHandler={onPress}
        >
          <MaterialCommunityIcons
            name="home"
            size={24}
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
