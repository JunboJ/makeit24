import React from 'react';
import { Text, StyleSheet } from 'react-native';
import constants from '../../constants/constants';

const CardText = ({ style, children }) => {
    return (
        <Text style={{ ...styles.textStyle, ...style }}>{children}</Text>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'segoe-ui-bold',
        fontSize: 18,
        color: constants.colorPalette.rnSet3.darkBlue
    }
});

export default CardText;