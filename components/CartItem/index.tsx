import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import { StyledButton } from '../StyledButton';

const CartItem = () => {
  return (
    <View style={styles.cartContainer}>
    <ImageBackground 
      source={require('../../assets/images/ModelX.jpeg')} 
      style={styles.image} />

    <View style={styles.titles}>
      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subtitle}>Starting at $69.420</Text>
    </View>



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

  );
};

export default CartItem;
