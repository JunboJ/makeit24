import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../card/Card';
import constants from '../constants';

const CardContainer = ({ numbers }) => {
    return (
        <View style={styles.cardWrapper}>
            {
                numbers.map((val, index) => {
                    const type = val.type;
                    const number = val.number;
                    return !!val
                        ? <Card key={`${type}-${index}`} type={type}>{number}</Card>
                        : <Card key={`init-${index}`} type={constants.numberTypes.INITIAL} />
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row'
    }
});

export default CardContainer;