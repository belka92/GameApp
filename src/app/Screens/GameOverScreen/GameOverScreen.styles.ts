import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const useStyles = () => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    rootContainer: {
      flex: 1,
      padding: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    imageContainer: {
      margin: 36,
      borderWidth: 3,

      overflow: "hidden",
      borderColor: Colors.primary800,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    summeryText: {
      fontSize: 22,
      marginBottom: 20,
      textAlign: "center",
      fontFamily: "open-sans",
    },
    highlight: {
      color: Colors.primary500,
      fontFamily: "open-sans-bold",
    },
  });

  return {
    styles,
  };
};
