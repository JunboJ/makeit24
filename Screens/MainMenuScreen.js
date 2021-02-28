import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import CardContainer from '../components/cardContainer/CardContainer';
import RecursiveCard from '../components/recursiveCard/recursiveCard';
import constants from '../constants/constants';
import { Calculation } from '../core/calculation/Calculation';
import { Core } from '../core/Core';
import { NumberList } from '../core/numberList/NumberList';
import { OriginNumber } from '../core/originNumber/OriginNumber';

const initialList = new NumberList();

const MainMenuScreen = ({ navigation }) => {
    const [list, setList] = useState(initialList);
    const [numberList, setNumberList] = useState(list.listGenerator(constants.numberTypes.INITIAL));
    const [isInitStatus, setIsInitStatus] = useState(true);
    const [resolutions, setResolutions] = useState([]);

    const startGameHandler = () => {
        navigation.navigate('Game');
    };

    const generateHandler = () => {
        const newList = list.listGenerator();
        setIsInitStatus(false);
        setResolutions([]);
        setNumberList(newList);
    };

    const getSolutionsHandler = () => {
        Core.getSolutions(numberList);
        const newSolutions = [...Core.solutions]
        console.log('solution list', newSolutions.length);
        setResolutions(newSolutions);
    }

    const calculationTest = () => {
        const n1 = new OriginNumber(4);
        const n2 = new OriginNumber(6);
        const res = Calculation.do({ n1, n2, operator: constants.operatorTypes.DIVREV })
    }

    let cards = null;

    if (resolutions.length) {
        cards = resolutions.map((resolution, index) => {
            return (<RecursiveCard style={styles.recursiveCard} key={`resolution-${index}`} numberObject={resolution} />)
        });
    }

    return (
        <View style={styles.mainMenu}>
            <CardContainer numbers={numberList} />
            <Button title='Calculation Test' onPress={calculationTest} />
            <Button title='Generate' onPress={generateHandler} />
            <Button title='get solutions test' onPress={getSolutionsHandler} disabled={isInitStatus} />
            {/* <ScrollView style={styles.scrollView}>
                {cards}
            </ScrollView> */}
            <Button title='Start Game' onPress={startGameHandler} />
        </View>
    )
};

MainMenuScreen.navigationOptions = navigationData => {
}

const styles = StyleSheet.create({
    mainMenu: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: constants.colorPalette.rnSet3.white
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 90
    },
    scrollView: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%'
    },
    recursiveCard: {
        width: '100%',
        flexDirection: 'row'
    }
});

export default MainMenuScreen;