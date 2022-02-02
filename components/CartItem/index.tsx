import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import { StyledButton } from "../StyledButton";

const CartItem = (props: any) => {

  const { name, tagName, taglineCTA, image } = props;

  return (
    <View style={styles.cartContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{ name }</Text>
        <Text style={styles.subtitle}>
          { tagName }&nbsp;
          <Text style={styles.subtitleCTA}>
            { taglineCTA }
          </Text>
          </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn("Button primary");
          }}
        />

        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => {
            console.warn("Button secondary");
          }}
        />
      </View>
    </View>
  );
};

export default CartItem;
