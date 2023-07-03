import React, { ReactNode } from "react";
import { View } from "react-native";

import { useStyles } from "./Card.styles";

const Card = ({ children }: { children: ReactNode }) => {
  const { styles } = useStyles();
  return <View style={styles.card}>{children}</View>;
};

export default Card;
