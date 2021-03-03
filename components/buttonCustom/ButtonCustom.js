import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import constants from "../../constants/constants";

const rnSet3 = constants.colorPalette.rnSet3;

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
  let dimension;
  switch (size) {
    case "small":
      dimension = { heightY: 40, heightZ: 4 };
      break;
    case "medium":
      dimension = { heightY: 50, heightZ: 5 };
      break;
    case "large":
      dimension = { heightY: 60, heightZ: 6 };
      break;
    default:
      dimension = { heightY: 50, heightZ: 5 };
      break;
  }
  const { heightY, heightZ } = dimension;
  const innerHeight = heightY;
  const buttonHeight = heightZ;
  const outterHeight = innerHeight + buttonHeight + 1;

  const wrapperIsPressed = { paddingTop: heightZ, height: outterHeight };

  let mainColor = styles.buttonBlue;
  let shadowColor = styles.buttonBlueShadow;
  let underlayTheme = rnSet3.lightBlue;
  switch (colorTheme) {
    case "yellow":
      mainColor = styles.buttonYellow;
      shadowColor = styles.buttonYellowShadow;
      underlayTheme = rnSet3.yellow;
      break;
    case "red":
      mainColor = styles.buttonRed;
      shadowColor = styles.buttonRedShadow;
      underlayTheme = rnSet3.lightRed;
      break;
    case "lightWarning":
      mainColor = styles.buttonLightWarning;
      shadowColor = styles.buttonLightWarningShadow;
      underlayTheme = rnSet3.white;
      break;
    default:
      mainColor = styles.buttonBlue;
      shadowColor = styles.buttonBlueShadow;
      underlayTheme = rnSet3.lightBlue;
  }

  const touchableProps = {
    activeOpacity: 1,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    style: isPress
      ? {
          ...styles.buttonStyle,
          ...mainColor,
          height: innerHeight,
        }
      : {
          ...styles.buttonStyle,
          ...mainColor,
          ...styles.buttonNormal,
          ...shadowColor,
          height: heightY,
          shadowOffset: { width: 0, height: heightZ },
        },
    onPress: onPressHandler,
    underlayColor: underlayTheme,
  };

  return (
    <View
      style={
        isPress
          ? {
              ...styles.wrapperStyle,
              ...styles.wrapperPressedStyle,
              ...wrapperIsPressed,
              ...style,
            }
          : {
              ...styles.wrapperStyle,
              height: outterHeight,
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

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 68,
    marginHorizontal: 10
  },
  wrapperPressedStyle: {
    paddingTop: 7,
  },
  buttonStyle: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNormal: {
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textStyle: {
    color: rnSet3.white,
    fontFamily: "segoe-ui-bold",
    fontSize: 20,
  },
  buttonBlue: {
    borderColor: rnSet3.darkBlue,
    backgroundColor: rnSet3.lightBlue,
  },
  buttonBlueShadow: {
    shadowColor: rnSet3.darkBlue,
  },
  buttonYellow: {
    borderColor: rnSet3.darkYellow,
    backgroundColor: rnSet3.yellow,
  },
  buttonYellowShadow: {
    shadowColor: rnSet3.darkYellow,
  },
  buttonRed: {
    borderColor: rnSet3.red,
    backgroundColor: rnSet3.lightRed,
  },
  buttonRedShadow: {
    shadowColor: rnSet3.red,
  },
  buttonLightWarning: {
    borderColor: rnSet3.red,
    backgroundColor: rnSet3.white
  },
  buttonLightWarningShadow: {
    shadowColor: rnSet3.red
  }
});

export default ButtonCustom;
