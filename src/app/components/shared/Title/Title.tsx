import { Text } from "react-native";
import React, { ReactNode } from "react";
import { useStyles } from "./Title.styles";

const Title = ({ children }: { children: ReactNode }) => {
  const { styles } = useStyles();
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
