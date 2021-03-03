import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameScreen from '../screens/GameScreen';
import HintListScreen from '../screens/HintListScreen';
import MainMenuScreen from '../screens/MainMenuScreen';

const MainNavigator = createStackNavigator(
    {
        'Main Menu': MainMenuScreen,
        Game: GameScreen,
        HintList: HintListScreen
    },
    {
        headerMode: 'float',
        defaultNavigationOptions: {
            headerTransparent: true
        }
    }
);

export default createAppContainer(MainNavigator);