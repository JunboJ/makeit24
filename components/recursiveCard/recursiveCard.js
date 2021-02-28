import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../card/Card';
import constants from '../../constants/constants';
import { render } from 'react-dom';

const RecursiveCard = ({ numberObject }) => {
    const recursiveOperandRender = ({ operands, operator }) => {
        const showReverse = false;
        let content = [];
        if (!showReverse && operator.charAt(0) === 'r') {
            operands = operands.reverse();
            operator = operator.slice(-1);
        }

        let renderOperator;
        switch (operator) {
            case constants.operatorTypes.DIV:
            case constants.operatorTypes.DIVREV:
                renderOperator = '\u00F7'
                break;
            case constants.operatorTypes.MUL:
                renderOperator = '\u00D7'
                break;
            case constants.operatorTypes.SUB:
            case constants.operatorTypes.SUBREV:
                renderOperator = '\u2212'
                break;
            case constants.operatorTypes.ADD:
                renderOperator = '\u002B'
                break;

            default:
                break;
        }

        operands.forEach((operand, index) => {
            const operandType = operand.type;
            if (operandType === constants.numberTypes.RESULT) {
                content.push(
                    <Text style={styles.textWrapper} key={`originNumber-${Math.random(3) * 1000}`}>
                        {index === 1
                            ? <Text>{renderOperator}</Text>
                            : null}
                        <Text>{`(`}</Text>
                        <Text>{recursiveOperandRender(operand.getExpression())}</Text>
                        <Text>{`)`}</Text>
                    </Text>
                )
            }
            if (operandType === constants.numberTypes.ORIGIN) {
                content.push(<Text style={styles.textWrapper} key={`originNumber-${Math.random(3) * 1000}`}>{`${index === 1 ? renderOperator : ''}${operand.number}`}</Text>)
            }
        });
        return content;
    }

    const recursiveRender = (item) => {
        const itemType = item.type;
        if (itemType === constants.numberTypes.ORIGIN) {
            return (
                <Card type={itemType}>{item.number}</Card>
            )
        }

        const expression = item.getExpression();
        if (itemType === constants.numberTypes.FINAL) {
            return (
                <Card type={constants.numberTypes.FINAL}>
                    {recursiveOperandRender(expression)}
                </Card>
            )
        }
        if (itemType === constants.numberTypes.RESULT) {
            return (
                <Card type={itemType} key={`resultNumber-${Math.random()}`}>
                    {recursiveOperandRender(expression)}
                </Card>
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
        width: 'auto',
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
    }
});

export default RecursiveCard;