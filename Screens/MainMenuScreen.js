import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonCustom from "../components/buttonCustom/ButtonCustom";
import RecursiveCard from "../components/recursiveCard/recursiveCard";
import constants from "../constants/constants";
import { NumberList } from "../core/numberList/NumberList";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Ball from "../components/animation/Animated";

const initialList = new NumberList();

const MainMenuScreen = ({ navigation }) => {
  const [list, setList] = useState(initialList);
  const [numberList, setNumberList] = useState(
    list.listGenerator(constants.numberTypes.INITIAL)
  );
  const [isInitStatus, setIsInitStatus] = useState(true);
  const startGameHandler = () => {
    navigation.navigate({ routeName: "Game", params: { numberList } });
  };

  const generateHandler = () => {
    const newList = list.listGenerator();
    setIsInitStatus(false);
    setNumberList(newList);
  };

  return (
    <View style={styles.mainMenu}>
      <View style={styles.controlSet}>
        <ButtonCustom
          onPressHandler={startGameHandler}
          size="large"
          style={{ width: 200, borderRadius: 10 }}
        >
          <FontAwesome5
            name="play"
            size={40}
            color={constants.colorPalette.rnSet3.white}
          />
        </ButtonCustom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMenu: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: constants.colorPalette.rnSet3.white,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
  },
  scrollView: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
  },
  recursiveCard: {
    width: "100%",
    flexDirection: "row",
  },
  controlSet: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
});

export default MainMenuScreen;
