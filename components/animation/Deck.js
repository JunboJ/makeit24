import React, { useRef } from "react";
import { Card, Button } from "react-native-elements";
import { ScrollView } from "react-native";
import SwipeCard from "./SwipeCard";

const Deck = ({ data }) => {
  const renderCards = () => {
    return data.map((item) => {
      return (
        <SwipeCard key={item.id}>
          <Card>
            <Card.Title>{item.text}</Card.Title>
            <Card.Divider></Card.Divider>
            <Card.Image source={{ uri: item.uri }}>
              <Button title="Add to Favourite" />
            </Card.Image>
          </Card>
        </SwipeCard>
      );
    });
  };

  return <ScrollView>{renderCards()}</ScrollView>;
};

export default Deck;
