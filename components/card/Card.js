import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import constants from '../../constants/constants';
import CardText from '../cardText/CardText';

const Card = ({ type, children }) => {
    let content;
    switch (type) {
        case constants.numberTypes.INITIAL:
            content = '?';
            break;
        case constants.numberTypes.ORIGIN:
        case constants.numberTypes.RESULT:
        case constants.numberTypes.FINAL:
            content = children;
            break;
        default:
            content = 'Er'
    }

    return (
        <View style={styles.cardWrapper}>
            <CardText>{content}</CardText>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        height: 75,
        width: 'auto',
        minWidth: 55,
        shadowColor: 'black',
        shadowOffset: { width: 60, height: 80 },
        backgroundColor: constants.colorPalette.rnSet3.white,
        borderWidth: 3,
        borderColor: constants.colorPalette.rnBlue1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 14,
        margin: 5,
    }
});

export default Card;