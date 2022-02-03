import * as React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import CartItem from "../CartItem";

import cars from "./cars";

const CarsList = (props: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CartItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;

// Explicacao: tem que receber name, tagName, taglineCTA, image ...
{
  /* <CartItem name="" tagName="" taglineCTA="" image="" /> */
}

{
  /* <FlatList data={cars} renderItem={({ item }) => <CartItem {...item} />} /> */
}
// ou
