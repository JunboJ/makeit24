import React, { useRef } from "react";
import { View, Animated, PanResponder } from "react-native";

const SwipeCard = ({ children }) => {
  const pan = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan }], {
          useNativeDriver: false
      }),
      onPanResponderRelease: (event, gestureState) => {
        Animated.spring(pan, { toValue: 0, useNativeDriver: true }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{ transform: [{ translateX: pan }] }}
    >
      {children}
    </Animated.View>
  );
};

export default SwipeCard;
