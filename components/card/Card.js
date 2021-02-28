import React from 'react';
import { View, StyleSheet } from 'react-native';
import constants from '../../constants/constants';
import CardText from '../cardText/CardText';

const Card = ({ type, children, style }) => {
    let content;
    switch (type) {
        case constants.numberTypes.INITIAL:
            content = '?';
            break;
        case constants.numberTypes.ORIGIN:
        case constants.numberTypes.RESULT:
        case constants.numberTypes.FINAL:
        case 'operator':
            content = children;
            break;
        default:
            content = 'Er'
    }

    return (
        <View style={{...styles.cardWrapper, ...style}}>
            <CardText>{content}</CardText>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: '100%',
        height: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: constants.colorPalette.rnSet3.white,
        borderWidth: 3,
        borderColor: constants.colorPalette.rnBlue1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 14,
    }
});

export default Card;