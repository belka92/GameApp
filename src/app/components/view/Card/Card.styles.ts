import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const useStyles = () => {
  const devicesWidth = Dimensions.get("window").width;

  const styles = StyleSheet.create({
    card: {
      padding: 16,
      elevation: 4,
      shadowRadius: 6,
      borderRadius: 16,
      shadowOpacity: 0.25,
      marginHorizontal: 24,
      alignItems: "center",
      shadowColor: "black",
      justifyContent: "center",
      backgroundColor: Colors.primary800,
      shadowOffset: { width: 0, height: 2 },
      marginTop: devicesWidth < 380 ? 28 : 36,
    },
  });

  return {
    styles,
  };
};
