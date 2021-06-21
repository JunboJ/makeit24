import React from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";
import Deck from "../components/animation/Deck";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri:
      "https://cdn.shopify.com/s/files/1/0091/3742/products/E358000_1024x.jpg?v=1531972541",
  },
  {
    id: 2,
    text: "Card #2",
    uri:
      "https://www.muralswallpaper.com/app/uploads/cute-colourful-cactus-flower-wallpaper-mural-Plain.jpg",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg",
  },
];

const HistoryScreen = () => {

  return (
    <View style={styles.body}>
      <Deck data={DATA}/>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 100,
  },
});

export default HistoryScreen;
