import * as React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export function StyledButton(props: any) {


    // props metodo melhor
    const { type, content, onPress } = props;


    // colors for the button
    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
    const textColor = type === "primary" ? "#fff" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={ [styles.button, {backgroundColor: backgroundColor }] }
        onPress={() => onPress()}
      >

          <Text style={ [styles.text, {color: textColor} ]}>{content}</Text>


      </Pressable>
    </View>
  );
}


 // props metodo feio
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;