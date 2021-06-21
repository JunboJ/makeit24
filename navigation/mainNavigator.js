import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import ButtonCustom from '../components/buttonCustom/ButtonCustom';
import GameScreen from '../screens/GameScreen/GameScreen';
import HintListScreen from '../screens/HintListScreen';
import HistoryScreen from '../screens/HistoryScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import UserScreen from '../screens/user/userScreen';
import GameHeader from './headers/Game';
import HomeHeader from './headers/Home';

const options = {
	headerMode: 'screen',
	defaultNavigationOptions: {
		headerTransparent: true,
	},
	navigationOptions: {
		headerStyle: {},
	},
};

const GameStack = createStackNavigator(
	{
		Home: {
			// screen: HistoryScreen,
			screen: MainMenuScreen,
			navigationOptions: ({ navigation }) => {
				return {
					headerLeft: () => <HomeHeader navigation={navigation} />,
				};
			},
		},
		Game: {
			screen: GameScreen,
			navigationOptions: ({ navigation }) => {
				return {
					headerLeft: () => <GameHeader navigation={navigation} />,
				};
			},
		},
		HintList: {
			screen: HintListScreen,
		},
	},
	{
		// Options for the router:
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerTransparent: true,
		},

		// Visual options:
		mode: Card,
		headerMode: 'screen', //Each screen has a header attached to it and the header fades in and out together with the screen
	}
);

const MainNavigator = createStackNavigator(
	{
		GameStack: {
			screen: GameStack,
			navigationOptions: ({ navigation }) => {
				return {
					title: '',
				};
			},
		},
		Login: {
			screen: UserScreen,
		},
	},
	{
		// Options for the router:
		defaultNavigationOptions: {
			headerTransparent: true,
		},

		// Visual options
		mode: 'modal',
		headerMode: 'screen',
	}
);

export default createAppContainer(MainNavigator);
