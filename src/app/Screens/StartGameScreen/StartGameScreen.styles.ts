import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const useStyles = () => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    rootContainer: {
      flex: 1,
      alignItems: "center",
    },

    numberInput: {
      width: 50,
      height: 50,
      fontSize: 32,
      marginBottom: 6,
      fontWeight: "bold",
      textAlign: "center",
      borderBottomWidth: 2,
      color: Colors.accent500,
      borderBottomColor: Colors.accent500,
    },
    buttonsContainer: {
      flexDirection: "row",
    },
    buttonContainer: {
      flex: 1,
    },
  });

  return {
    styles,
  };
};
