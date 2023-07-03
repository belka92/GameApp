import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const useStyles = () => {
  const devicesWidth = Dimensions.get("window").width;

  const styles = StyleSheet.create({
    container: {
      margin: devicesWidth < 380 ? 12 : 24,
      padding: devicesWidth < 380 ? 12 : 24,
      borderWidth: 4,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      borderColor: Colors.accent500,
    },
    numberText: {
      fontSize: devicesWidth < 380 ? 28 : 36,
      color: Colors.accent500,
      fontFamily: "open-sans-bold",
    },
  });

  return {
    styles,
  };
};
