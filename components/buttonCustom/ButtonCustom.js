import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import constants from '../../constants/constants';

const ButtonCustom = ({ children, title, onPressHandler, dimension = { heightY: 60, heightZ: 7 }, fontSize = 20 }) => {
    const [isPress, setIsPress] = useState(false);

    const { heightY, heightZ } = dimension;
    const innerHeight = heightY;
    const buttonHeight = heightZ;
    const outterHeight = innerHeight + buttonHeight + 1;

    const wrapperIsPressed = { paddingTop: heightZ, height: outterHeight };


    const touchableProps = {
        activeOpacity: 1,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        style: isPress
            ? {
                ...styles.buttonStyle,
                height: innerHeight
            }
            : {
                ...styles.buttonStyle,
                ...styles.buttonNormal,
                height: heightY,
                shadowOffset: { width: 0, height: heightZ }
            },
        onPress: onPressHandler,
        underlayColor: constants.colorPalette.rnSet3.lightBlue
    }

    return (
        <View style={
            isPress
                ? {
                    ...styles.wrapperStyle,
                    ...styles.wrapperPressedStyle,
                    ...wrapperIsPressed
                }
                : {
                    ...styles.wrapperStyle,
                    height: outterHeight
                }
        }>
            <TouchableHighlight {...touchableProps}>
                {
                    children
                        ? children
                        : <Text style={{...styles.textStyle, fontSize}}>{title}</Text>
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
        backgroundColor: constants.colorPalette.rnSet3.lightBlue,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: constants.colorPalette.rnSet3.darkBlue,
        borderWidth: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNormal: {
        shadowColor: constants.colorPalette.rnSet3.darkBlue,
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
    }
});

const buttonReleased = StyleSheet.compose(styles.buttonStyle, styles.buttonNormal);
const wrapperPressed = StyleSheet.compose(styles.wrapperStyle, styles.wrapperPressedStyle);

export default ButtonCustom;