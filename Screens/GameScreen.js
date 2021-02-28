import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CardContainer from '../components/cardContainer/CardContainer';
import PlayArea from '../components/playArea/PlayArea';
import constants from '../constants/constants';

const GameScreen = ({ navigation }) => {
    const list = navigation.getParam('numberList');
    console.log('numberList', list);
    const onPressHandler = () => {

    }

    return (
        <View style={styles.gameScreen}>
            <Text>
                This is the Game Screen
            </Text>
            <PlayArea>
                <CardContainer items={list} />
            </PlayArea>
        </View>
    )
};

GameScreen.navigationOptions = (options) => {
    return ({
        headerLeft: () => {
            return (
                <View>
                    <Text>Home</Text>
                </View>
            )
        }
    })
}

const styles = StyleSheet.create({
    gameScreen: {
        backgroundColor: constants.colorPalette.rnBlue2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameScreen;