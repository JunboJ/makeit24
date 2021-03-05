import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import ButtonCustom from "../components/buttonCustom/ButtonCustom";
import GameScreen from "../screens/GameScreen/GameScreen";
import HintListScreen from "../screens/HintListScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MainMenuScreen from "../screens/MainMenuScreen";

const GameStack = createStackNavigator(
  {
    Home: MainMenuScreen,
    Game: GameScreen,
    HintList: HintListScreen,
  },
  {
    headerMode: "float",
    defaultNavigationOptions: {
      headerTransparent: true,
    },
    navigationOptions: () => {
      return {
        headerLeft: () => (
          <ButtonCustom colorTheme="lightWarning" size="small">
            <Text>asd</Text>
          </ButtonCustom>
        ),
      };
    },
  }
);

const userStack = createStackNavigator({
  History: HistoryScreen,
});

const MainNavigator = createDrawerNavigator({
  Home: GameStack,
  History: userStack,
});

export default createAppContainer(MainNavigator);
