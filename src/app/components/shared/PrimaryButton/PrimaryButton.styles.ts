import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const useStyles = () => {
  const styles = StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: "hidden",
    },
    buttonInnerContainer: {
      elevation: 2,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: Colors.primary500,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
    pressed: {
      opacity: 0.75,
    },
  });

  return {
    styles,
  };
};
