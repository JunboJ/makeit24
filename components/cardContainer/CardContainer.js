import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../card/Card';
import constants from '../../constants/constants';
import RecursiveCard from '../recursiveCard/recursiveCard';

const CardContainer = ({ numbers }) => {
    return (
        <View style={styles.cardWrapper}>
            {
                numbers.map((val, index) => {
                    const type = val.type;
                    return !!val
                        ? <RecursiveCard key={`${type}-${index}`} numberObject={val} />
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