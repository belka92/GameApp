import React, { ReactNode } from "react";
import { View, Text } from "react-native";

import { useStyles } from "./NumberContainer.styles";

const NumberContainer = ({ children }: { children: ReactNode }) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
