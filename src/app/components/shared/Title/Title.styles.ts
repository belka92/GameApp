import { Platform, StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    title: {
      width: 300,
      padding: 12,
      fontSize: 24,
      color: "white",
      maxWidth: "80%",
      textAlign: "center",
      borderColor: "white",
      fontFamily: "open-sans-bold",
      borderWidth: Platform.select({ ios: 0, android: 2 }),
    },
  });

  return {
    styles,
  };
};
