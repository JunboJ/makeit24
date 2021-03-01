import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from '../card/Card';
import constants from '../../constants/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecursiveCard = ({ object, onPressHandler }) => {
    const recursiveOperandRender = ({ operands, operator }) => {
        const showReverse = false;
        let content = [];
        if (!showReverse && operator.charAt(0) === 'r') {
            operands = operands.reverse();
            operator = operator.slice(-1);
        }

        let renderOperator = operatorRender(operator);

        operands.forEach((operand, index) => {
            const operandType = operand.type;
            if (operandType === constants.numberTypes.RESULT) {
                content.push(
                    <Text key={`originNumber-${Math.random(3) * 1000}`}>
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
                content.push(<Text key={`originNumber-${Math.random(3) * 1000}`}>{`${index === 1 ? renderOperator : ''}${operand.number}`}</Text>)
            }
        });
        return content;
    }

    const operatorRender = operator => {
        switch (operator) {
            case constants.operatorTypes.DIV:
            case constants.operatorTypes.DIVREV:
                return '\u00F7'
            case constants.operatorTypes.MUL:
                return '\u00D7'
            case constants.operatorTypes.SUB:
            case constants.operatorTypes.SUBREV:
                return '\u2212'
            case constants.operatorTypes.ADD:
                return '\u002B'
        }
    }

    const recursiveRender = (item) => {
        const itemType = item.type;
        if (itemType === constants.numberTypes.ORIGIN) {
            return (
                <Card type={itemType}>{item.number}</Card>
            )
        }

        if (Object.values(constants.operatorTypes).includes(itemType)) {
            return (
                <Card type={'operator'} style={styles.operatorCard}>{operatorRender(itemType)}</Card>
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
        <TouchableOpacity style={styles.recursiveCard} onPress={() => onPressHandler(object)}>{recursiveRender(object)}</TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    recursiveCard: {
        height: 75,
        width: 'auto',
        minWidth: 55,
        margin: 5
    },
    operatorCard: {
        borderColor: constants.colorPalette.rnSet3.red
    }
})

export default RecursiveCard;