import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../card/Card";
import constants from "../../constants/constants";
import RecursiveCard from "../recursiveCard/recursiveCard";
import styles from "./styles/styles";

const CardContainer = ({ items, onPressHandler, activeItem, name }) => {
  return (
    <View style={styles.cardWrapper}>
      {items.map((val, index) => {
        const type = val.type;
        return !!val ? (
          <RecursiveCard
            key={`${type}-${index}`}
            object={val}
            onPressHandler={onPressHandler}
            active={name === 'operands' ? Object.values(activeItem).includes(val) : activeItem.type === val.type}
          />
        ) : (
          <Card key={`init-${index}`} type={constants.numberTypes.INITIAL} />
        );
      })}
    </View>
  );
};

export default CardContainer;
