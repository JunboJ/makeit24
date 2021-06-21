import { StyleSheet } from "react-native";
import constants from "../../../constants/constants";

const btnStyle = (colorTheme, size) => {
  const rnSet3 = constants.colorPalette.rnSet3;

  const buttonThemes = (colorTheme) => {
    switch (colorTheme) {
      case "yellow":
        return {
          mainColor: {
            borderColor: rnSet3.darkYellow,
            backgroundColor: rnSet3.yellow,
          },
          shadowColor: {
            shadowColor: rnSet3.darkYellow,
          },
          underlayTheme: rnSet3.yellow,
        };
      case "red":
        return {
          mainColor: {
            borderColor: rnSet3.red,
            backgroundColor: rnSet3.lightRed,
          },
          shadowColor: {
            shadowColor: rnSet3.red,
          },
          underlayTheme: rnSet3.lightRed,
        };
      case "lightWarning":
        return {
          mainColor: {
            borderColor: rnSet3.red,
            backgroundColor: constants.colorPalette.rnPureWhite,
          },
          shadowColor: {
            shadowColor: rnSet3.red,
          },
          underlayTheme: constants.colorPalette.rnPureWhite,
        };
      // blue by default
      default:
        return {
          mainColor: {
            borderColor: rnSet3.darkBlue,
            backgroundColor: rnSet3.lightBlue,
          },
          shadowColor: {
            shadowColor: rnSet3.darkBlue,
          },
          underlayTheme: rnSet3.lightBlue,
        };
    }
  };

  const getDimension = (size) => {
    switch (size) {
      case "small":
        return { heightY: 40, heightZ: 4, font: 18 };
      case "medium":
        return { heightY: 50, heightZ: 5, font: 20 };
      case "large":
        return { heightY: 100, heightZ: 10, font: 22 };
      default:
        return { heightY: 50, heightZ: 5, font: 20 };
    }
  };

  const { mainColor, shadowColor, underlayTheme } = buttonThemes(colorTheme);
  const { heightY, heightZ, font } = getDimension(size);

  const wrapperNotPressed = {
    height: heightY + heightZ + 1,
    marginHorizontal: 10,
  };

  const wrapperPressed = {
    paddingTop: heightZ,
    height: heightY + heightZ + 1,
    marginHorizontal: 10,
  };

  const buttonStyle = {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    minWidth: 50,
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonNormal = {
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  };

  const buttonPressed = {
    ...buttonStyle,
    ...mainColor,
    minHeight: heightY,
  };

  const buttonNotPressed = {
    ...buttonStyle,
    ...buttonNormal,
    ...mainColor,
    ...shadowColor,
    minHeight: heightY,
    shadowOffset: { width: 0, height: heightZ },
  };

  const buttonDisabled = {
    ...buttonStyle,
    ...buttonNormal,
    borderColor: constants.colorPalette.rnDisabled.darkGray,
    backgroundColor: constants.colorPalette.rnDisabled.lightGray,
    shadowColor: constants.colorPalette.rnDisabled.darkGray,
    minHeight: heightY,
    shadowOffset: { width: 0, height: heightZ },
  };

  return {
    styles: StyleSheet.create({
      textStyle: {
        color: rnSet3.white,
        fontFamily: "segoe-ui-bold",
        fontSize: font,
      },
      buttonNotPressed: buttonNotPressed,
      buttonPressed: buttonPressed,
      wrapperPressed: wrapperPressed,
      wrapperNotPressed: wrapperNotPressed,
      buttonDisabled: buttonDisabled,
    }),
    underlayTheme: underlayTheme,
  };
};

export default btnStyle;
