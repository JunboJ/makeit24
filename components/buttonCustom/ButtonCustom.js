import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import constants from '../../constants/constants';

const ButtonCustom = ({ children, title, onPressHandler, dimension = { heightY: 60, heightZ: 7 }, fontSize = 20, colorTheme = 'blue', style }) => {
    const [isPress, setIsPress] = useState(false);

    const { heightY, heightZ } = dimension;
    const innerHeight = heightY;
    const buttonHeight = heightZ;
    const outterHeight = innerHeight + buttonHeight + 1;

    const wrapperIsPressed = { paddingTop: heightZ, height: outterHeight };

    let mainColor = styles.buttonBlue;
    let shadowColor = styles.buttonBlueShadow;
    let underlayTheme = constants.colorPalette.rnSet3.lightBlue;
    switch (colorTheme) {
        case 'yellow':
            mainColor = styles.buttonYellow;
            shadowColor = styles.buttonYellowShadow;
            underlayTheme = constants.colorPalette.rnSet3.yellow;
            break;
        case 'red':
            mainColor = styles.buttonRed;
            shadowColor = styles.buttonRedShadow
            underlayTheme = constants.colorPalette.rnSet3.lightRed;
            break;
        default:
            mainColor = styles.buttonBlue;
            shadowColor = styles.buttonBlueShadow;
            underlayTheme = constants.colorPalette.rnSet3.lightBlue;
    }

    const touchableProps = {
        activeOpacity: 1,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        style: isPress
            ? {
                ...styles.buttonStyle,
                ...mainColor,
                height: innerHeight
            }
            : {
                ...styles.buttonStyle,
                ...mainColor,
                ...styles.buttonNormal,
                ...shadowColor,
                height: heightY,
                shadowOffset: { width: 0, height: heightZ }
            },
        onPress: onPressHandler,
        underlayColor: underlayTheme
    }

    return (
        <View style={
            isPress
                ? {
                    ...styles.wrapperStyle,
                    ...styles.wrapperPressedStyle,
                    ...wrapperIsPressed,
                    ...style
                }
                : {
                    ...styles.wrapperStyle,
                    height: outterHeight,
                    ...style
                }
        }>
            <TouchableHighlight {...touchableProps}>
                {
                    children
                        ? children
                        : <Text style={{ ...styles.textStyle, fontSize }}>{title}</Text>
                }
            </TouchableHighlight>
        </View>
    )
};



const styles = StyleSheet.create({
    wrapperStyle: {
        height: 68
    },
    wrapperPressedStyle: {
        paddingTop: 7
    },
    buttonStyle: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNormal: {
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 1,
        shadowRadius: 0
    },
    textStyle: {
        color: constants.colorPalette.rnSet3.white,
        fontFamily: 'segoe-ui-bold',
        fontSize: 20
    },
    buttonBlue: {
        borderColor: constants.colorPalette.rnSet3.darkBlue,
        backgroundColor: constants.colorPalette.rnSet3.lightBlue,
    },
    buttonBlueShadow: {
        shadowColor: constants.colorPalette.rnSet3.darkBlue,
    },
    buttonYellow: {
        borderColor: constants.colorPalette.rnSet3.darkYellow,
        backgroundColor: constants.colorPalette.rnSet3.yellow,
    },
    buttonYellowShadow: {
        shadowColor: constants.colorPalette.rnSet3.darkYellow,
    },
    buttonRed: {
        borderColor: constants.colorPalette.rnSet3.red,
        backgroundColor: constants.colorPalette.rnSet3.lightRed,
    },
    buttonRedShadow: {
        shadowColor: constants.colorPalette.rnSet3.red,
    },
});

export default ButtonCustom;