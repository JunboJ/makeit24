import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../card/Card';
import constants from '../constants';

const RecursiveCard = ({ numberObject }) => {
    const recursiveOperandRender = ({ operands, operator }) => {
        const showReverse = false;
        let content = [];
        if (!showReverse && operator.charAt(0) === 'r') {
            operands = operands.reverse();
            operator = operator.slice(-1);
        }
        operands.forEach((operand, index) => {
            const operandType = operand.type;
            if (operandType === constants.numberTypes.RESULT) {
                content.push(
                    <Text style={styles.textWrapper} key={`originNumber-${Math.random(3) * 1000}`}>
                        {index === 1
                            ? <Text>{operator}</Text>
                            : null}
                        <Text>{`(`}</Text>
                        <Text>{recursiveOperandRender(operand.getExpression())}</Text>
                        <Text>{`)`}</Text>
                    </Text>
                )
            }
            if (operandType === constants.numberTypes.ORIGIN) {
                content.push(<Text style={styles.textWrapper} key={`originNumber-${Math.random(3) * 1000}`}>{`${index === 1 ? operator : ''}${operand.number}`}</Text>)
            }
        });
        return content;
    }

    const recursiveRender = (item) => {
        const expression = item.getExpression();
        const itemType = item.type;
        if (itemType === constants.numberTypes.FINAL) {
            return (
                <View style={styles.resultCard}>
                    {recursiveOperandRender(expression)}
                </View>
            )
        }
        if (itemType === constants.numberTypes.RESULT) {
            return (
                <Card type={itemType} key={`resultNumber-${Math.random()}`}>
                    {recursiveOperandRender(expression)}
                </Card>
            )
        }
        if (itemType === constants.numberTypes.ORIGIN) {
            return (
                <Card type={itemType}>{item.number}</Card>
            )
        }
    };

    return (
        <View>{recursiveRender(numberObject)}</View>
    )
}

const styles = StyleSheet.create({
    resultCard: {
        flexDirection: 'row',
        minHeight: 110,
        minWidth: 80,
        borderWidth: 1,
        borderColor: constants.colorPalette.rnSet1.red,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'blue'
    },
    textWrapper: {
        // borderWidth: 1,
        // borderColor: 'black'
    }
});

export default RecursiveCard;