import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import CardContainer from '../components/cardContainer/CardContainer';

const MainMenuScreen = ({ navigation }) => {
    const startGameHandler = () => {
        navigation.navigate('Game');
    };

    return (
        <View style={styles.mainMenu}>
            <Button title='Start Game' onPress={startGameHandler} />
        </View>
    )
};

MainMenuScreen.navigationOptions = navigationData =>{
    console.log('@@@@@', navigationData);
    return {
        header: () => {
            return (
                <View style={{
                    height: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30
                }}>
                    <Text>Another header?</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    mainMenu: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'white'
    }
})

export default MainMenuScreen;