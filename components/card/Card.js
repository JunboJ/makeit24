import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import constants from '../constants';

const Card = ({ type, children }) => {
    let content;
    switch (type) {
        case constants.numberTypes.INITIAL:
            content = '?';
            break;
        case constants.numberTypes.ORIGIN:
            content = children;
            break;
        default:
            content = 'Er'
    }

    return (
        <View style={styles.cardWrapper}>
            <Text>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        height: 55,
        width: 40,
        borderWidth: 1,
        borderColor: constants.colorPalette.rnBlue1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 5
    }
});

export default Card;