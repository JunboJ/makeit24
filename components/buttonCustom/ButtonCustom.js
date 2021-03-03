import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import {
  TouchableHighlight
} from "react-native-gesture-handler";
import btnStyle from "./styles/styles";

const ButtonCustom = ({
  children,
  title,
  onPressHandler,
  fontSize = 20,
  colorTheme = "blue",
  style,
  size = "medium",
}) => {
  const [isPress, setIsPress] = useState(false);
  const { styles, underlayTheme } = btnStyle(colorTheme, size);

  const touchableProps = {
    activeOpacity: 1,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    style: isPress
      ? {
        ...styles.buttonPressed
      }
      : {
        ...styles.buttonNotPressed
      },
    onPress: onPressHandler,
    underlayColor: underlayTheme
  };

  return (
    <View
      style={
        isPress
          ? {
            ...styles.wrapperPressed,
            ...style,
          }
          : {
            ...styles.wrapperNotPressed,
            ...style,
          }
      }
    >
      <TouchableHighlight {...touchableProps}>
        {children ? (
          children
        ) : (
            <Text style={{ ...styles.textStyle, fontSize }}>{title}</Text>
          )}
      </TouchableHighlight>
    </View>
  );
};

export default ButtonCustom;
