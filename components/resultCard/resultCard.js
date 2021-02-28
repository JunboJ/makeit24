import React from 'react';
import { StyleSheet } from 'react-native';
import Card from '../card/Card';
import constants from '../constants';

const ResultCard = ({ numberObject }) => {

    const rescursiveRender = (item) => {
        const itemType = item.type;
        if (itemType === constants.numberTypes.RESULT) {
            const expObject = item.getExpression();
            for (const operand of expObject['operands']) {
                const operandType = operand.type;
                if (operandType === constants.numberTypes.RESULT) {
                    return (ResultCard({ numberObject: operand }))
                }
                if (operandType === constants.numberTypes.RESULT) {
                    return (ResultCard({ numberObject: operand }))
                }
            }
        }
        if (itemType === constants.numberTypes.ORIGIN) {
            return (<Card number={item.number} type={item.type} />);
        }
    }

    return rescursiveRender(numberObject);
}

const styles = StyleSheet.create({
    resultCard: {
        minHeight: 110,
        minWidth: 80,
        borderWidth: 1,
        borderColor: constants.colorPalette.rnBlue1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'blue'
    }
});

export default ResultCard;