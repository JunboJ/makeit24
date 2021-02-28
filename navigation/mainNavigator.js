import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameScreen from '../Screens/GameScreen';
import HintListScreen from '../Screens/HintListScreen';
import MainMenuScreen from '../Screens/MainMenuScreen';

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