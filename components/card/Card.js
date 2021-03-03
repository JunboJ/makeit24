import React from 'react';
import { View, StyleSheet } from 'react-native';
import constants from '../../constants/constants';
import CardText from '../cardText/CardText';
import styles from './styles/styles';

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

export default Card;