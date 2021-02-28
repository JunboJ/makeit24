import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RecursiveCard from '../components/recursiveCard/recursiveCard';
import constants from '../constants/constants';
import { OriginNumber } from '../core/originNumber/OriginNumber';
import { ResultNumber } from '../core/resultNumber/ResultNumber';

const GameScreen = ({ }) => {
    const testNumber = new ResultNumber(new ResultNumber(new OriginNumber(3), new OriginNumber(6), constants.operatorTypes.DIVREV), new OriginNumber(6), constants.operatorTypes.ADD);
    return (
        <View style={styles.gameScreen}>
            <Text>
                This is the Game Screen
            </Text>
            <View>
                <RecursiveCard numberObject={testNumber}/>
            </View>
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