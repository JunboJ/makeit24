import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CardContainer from '../components/cardContainer/CardContainer';
import constants from '../constants/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonCustom from '../components/buttonCustom/ButtonCustom';

const operators = [
    { type: '+' },
    { type: '-' },
    { type: '*' },
    { type: '/' },
];

const GameScreen = ({ navigation }) => {
    const list = navigation.getParam('numberList');
    console.log('numberList', list);

    const [operands, setOperands] = useState([]);
    const [operandB, setOperandB] = useState(null);
    const [operator, setOperator] = useState(null);

    const numberOnPressHandler = (numObject) => {
        console.log('numObject', numObject);
    }

    const operatorOnPressHandler = (operatorString) => {

    }

    return (
        <View style={styles.gameScreen}>
            <CardContainer items={list} onPressHandler={numberOnPressHandler} />
            <CardContainer onPressHandler={operatorOnPressHandler} items={operators} />
        </View>
    )
};

GameScreen.navigationOptions = (options) => {
    return ({
        title: '',
        headerLeft: ({ onPress }) => {
            return (
                <ButtonCustom
                    colorTheme='red'
                    dimension={{ heightY: 45, heightZ: 5 }}
                    style={styles.headerLeftButton}
                    onPressHandler={onPress}
                >
                    <MaterialCommunityIcons name="home" size={24} color={constants.colorPalette.rnSet3.white} />
                </ButtonCustom>
            )
        }
    })
}

const styles = StyleSheet.create({
    gameScreen: {
        backgroundColor: constants.colorPalette.rnSet3.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLeftButton: {
        marginLeft: 20
    }
})

export default GameScreen;