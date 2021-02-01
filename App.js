import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CardContainer from './components/cardContainer/CardContainer';
import constants from './components/constants';
import { Core } from './components/core/Core';
import { NumberList } from './components/core/numberList/NumberList';
import { OriginNumber } from './components/core/originNumber/OriginNumber';
import { ResultNumber } from './components/core/resultNumber/ResultNumber';

export default function App() {
  const list = new NumberList();
  const [numberList, setNumberList] = useState(list.numberList);
  
  const generateHandler = () => {
    const newList = list.listGenerator();
    setNumberList(newList);
  };

  const calculateHandler = () => {
    const test = new ResultNumber(numberList[1], numberList[3], constants.operatorTypes.MUL);
    console.log('test', test);
  }

  useEffect(() => {
    Core.getSolutions(numberList);
  }, [numberList])

  return (
    <View style={styles.container}>
      <CardContainer numbers={numberList} />
      <Button title='Generate' onPress={generateHandler} />
      <Button title='calculation test' onPress={calculateHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
