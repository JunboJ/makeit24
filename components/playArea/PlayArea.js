import React from 'react';
import { View } from 'react-native';
import CardContainer from '../cardContainer/CardContainer';

const operators = [
    {type: '+'},
    {type: '-'},
    {type: '*'},
    {type: '/'},
];

const PlayArea = ({ children }) => {
    
    return (
        <View>
            {children}
            <CardContainer items={operators} />
        </View>
    )
};

export default PlayArea;