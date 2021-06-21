import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useEffect } from 'react/cjs/react.production.min';
import btnStyle from './styles/styles';

const ButtonCustom = ({
  children,
  title,
  textColor = 'white',
  onPressHandler,
  colorTheme = 'blue',
  style,
  size = 'medium',
  disabled = false,
}) => {
  const [isPress, setIsPress] = useState(false);
  const { styles, underlayTheme } = btnStyle(colorTheme, size);

  const touchableProps = {
    activeOpacity: 1,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    style: isPress
      ? {
          ...styles.buttonPressed,
          ...style,
        }
      : {
          ...styles.buttonNotPressed,
          ...style,
        },
    onPress: onPressHandler,
    underlayColor: underlayTheme,
  };

  const disabledProps = {
    activeOpacity: 1,
    style: {
      ...styles.buttonDisabled,
    },
  };

  if (disabled) {
    if (isPress) {
      setIsPress(false);
    }

    return (
      <View
        style={{
          ...styles.wrapperNotPressed,
          ...style,
        }}
      >
        <TouchableHighlight {...disabledProps}>
          {children ? (
            children
          ) : (
            <Text style={{ ...styles.textStyle }}>{title}</Text>
          )}
        </TouchableHighlight>
      </View>
    );
  }

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
          <Text style={{ ...styles.textStyle, color: textColor }}>{title}</Text>
        )}
      </TouchableHighlight>
    </View>
  );
};

export default ButtonCustom;
