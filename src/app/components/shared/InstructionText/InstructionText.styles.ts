import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const useStyles = () => {
  const styles = StyleSheet.create({
    instructionText: {
      fontSize: 24,
      fontFamily: "open-sans",
      color: Colors.accent500,
    },
  });

  return {
    styles,
  };
};
