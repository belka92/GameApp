import React, { ReactNode } from "react";
import { Text } from "react-native";

import { useStyles } from "./InstructionText.styles";

const InstructionText = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) => {
  const { styles } = useStyles();
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;
