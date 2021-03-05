import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import CardContainer from "../../components/cardContainer/CardContainer";
import constants from "../../constants/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";
import { ResultNumber } from "../../core/resultNumber/ResultNumber";
import { Calculation } from "../../core/calculation/Calculation";
import { Core } from "../../core/Core";
import { useSelector } from "react-redux";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import StrikeCounter from "../../components/strikeCounter/strikeCounter";
import { NumberList } from "../../core/numberList/NumberList";

const operators = [{ type: "+" }, { type: "-" }, { type: "*" }, { type: "/" }];
const initialList = new NumberList();

const GameScreen = ({ navigation }) => {
  const [listObj, setListObj] = useState(initialList);
  const [list, setList] = useState(
    listObj.listGenerator(constants.numberTypes.INITIAL)
  );
  const [isInitState, setIsInitState] = useState(true);
  const [operands, setOperands] = useState({ a: null, b: null });
  const [operator, setOperator] = useState({ type: null });
  const [inputStack, setInputStack] = useState();
  const [strikes, setStrikes] = useState(0);
  const [stepOut, setStepOut] = useState(false);
  const [resolutions, setResolutions] = useState([]);

  const gameHistory = useSelector((state) => state.game);

  const times = "\u00d7";

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

  const prevStepHandler = () => {
    const copyStack = [...inputStack];

    if (inputStack.length > 1) {
      copyStack.pop();
    }

    let lastStep = copyStack.slice(-1);

    setInputStack([...copyStack]);
    setList([...lastStep[0]]);
  };

  const generateHandler = () => {
    const newList = listObj.listGenerator();
    // setIsInitStatus(false);
    setList(newList);
    setInputStack([newList]);
  };

  const resetGameHandler = () => {
    const initialStep = inputStack[0];
    setList(initialStep);
  };

  const resetActive = () => {
    setOperands({ a: null, b: null });
    setOperator({ type: null });
  };

  const submitHandler = () => {
    const result = list[0].number;
    if (result === 24) {
      generateHandler();
    } else {
      setStrikes(strikes + 1);
      resetGameHandler();
    }
  };

  const getSolutionsHandler = () => {
    Core.getSolutions(list);
    const newSolutions = [...Core.solutions];
    setResolutions(newSolutions);
  };

  useEffect(() => {
    if (
      operands.a !== null &&
      operands.b !== null &&
      operator.type !== null &&
      !isInitState
    ) {
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
  }, [operands, operator, isInitState]);

  // check if no step left
  useEffect(() => {
    if (list.length === 1) {
      setStepOut(true);
    } else {
      setStepOut(false);
    }
  }, [list]);

  // auto start a new game
  useEffect(() => {
    if (isInitState) {
      generateHandler();
      setIsInitState(false);
    }
  }, [isInitState]);

  return (
    <View style={styles.gameScreen}>
      <StrikeCounter strikes={strikes} />
      <View style={styles.cardWrapper}>
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
      </View>
      <View style={styles.inGameControls}>
        <ButtonCustom
          colorTheme="blue"
          size="medium"
          onPressHandler={prevStepHandler}
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
          onPressHandler={submitHandler}
          disabled={stepOut ? false : true}
        >
          <Entypo
            name="check"
            size={24}
            color={
              stepOut
                ? constants.colorPalette.rnSet3.darkYellow
                : constants.colorPalette.rnDisabled.darkGray
            }
          />
        </ButtonCustom>
      </View>
      <View style={styles.answerStyle}>
        <ButtonCustom onPressHandler={generateHandler} size="small">
          <FontAwesome5
            name="dice"
            size={18}
            color={constants.colorPalette.rnSet3.white}
          />
        </ButtonCustom>
        <ButtonCustom
          onPressHandler={getSolutionsHandler}
          fontSize={18}
          size="small"
          colorTheme="lightWarning"
        >
          <Ionicons
            name="bulb"
            size={18}
            color={constants.colorPalette.rnSet3.red}
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
  cardWrapper: {
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
    flexDirection: "row",
    right: 50,
    bottom: 50,
  },
});

export default GameScreen;
