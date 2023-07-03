import React, { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import Colors from "../../../constants/Colors";
import { useStyles } from "./PrimaryButton.styles";

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  const { styles } = useStyles();

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

export type PrimaryButtonProps = {
  children: ReactNode;
  onPress: () => void;
};
