import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const useStyles = () => {
  const styles = StyleSheet.create({
    listItem: {
      padding: 12,
      elevation: 4,
      width: "100%",
      borderWidth: 1,
      shadowRadius: 3,
      borderRadius: 40,
      marginVertical: 8,
      shadowOpacity: 0.25,
      flexDirection: "row",
      shadowColor: "black",
      borderColor: Colors.primary800,
      justifyContent: "space-between",
      backgroundColor: Colors.accent500,
      shadowOffset: { width: 0, height: 0 },
    },
    itemText: {
      fontFamily: "open-sans",
    },
  });

  return {
    styles,
  };
};
