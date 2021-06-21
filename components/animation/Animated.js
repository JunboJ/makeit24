import React from "react";
import { useEffect } from "react";
import { Animated, View, StyleSheet, Text } from "react-native";

const Ball = () => {
  const position = new Animated.ValueXY(0, 0);
  useEffect(() => {
    Animated.spring(position, {
      toValue: {
        x: 100,
        y: 200,
      },
      delay: 500,
      useNativeDriver: true,
    }).start();
  });
  return (
    <Animated.View style={{ transform: position.getTranslateTransform() }}>
      <View style={styles.ball} />
      <Text>Something</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
  },
});

export default Ball;
