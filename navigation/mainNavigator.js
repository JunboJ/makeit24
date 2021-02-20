import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameScreen from '../Screens/GameScreen';
import HintListScreen from '../Screens/HintListScreen';
import MainMenuScreen from '../Screens/MainMenuScreen';

const MainNavigator = createStackNavigator(
    {
        MainMenu: MainMenuScreen,
        Game: GameScreen,
        HintList: HintListScreen
    },
    {  
        headerMode: 'screen',
        defaultNavigationOptions: {
            header: () => {
                return (
                    <View style={{
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30
                    }}>
                        <Text>Here is the customized header</Text>
                    </View>
                )
            }
        },
    }
);

export default createAppContainer(MainNavigator);