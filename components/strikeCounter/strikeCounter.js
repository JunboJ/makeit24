import React from "react";
import { View, Text } from "react-native";

const StrikeCounter = ({ strikes }) => {
  return (
    <View>
      <Text>{strikes}</Text>
    </View>
  );
};

export default StrikeCounter;
