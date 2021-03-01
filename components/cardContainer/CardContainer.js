import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../card/Card";
import constants from "../../constants/constants";
import RecursiveCard from "../recursiveCard/recursiveCard";

const CardContainer = ({ items, onPressHandler, activeItem }) => {
  return (
    <View style={styles.cardWrapper}>
      {items.map((val, index) => {
        const type = val.type;
        return !!val ? (
          <RecursiveCard
            key={`${type}-${index}`}
            object={val}
            onPressHandler={onPressHandler}
            active={Object.values(activeItem).includes(val)}
          />
        ) : (
          <Card key={`init-${index}`} type={constants.numberTypes.INITIAL} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
  },
});

export default CardContainer;
