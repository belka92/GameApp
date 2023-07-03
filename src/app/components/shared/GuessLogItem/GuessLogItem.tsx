import React from "react";
import { View, Text } from "react-native";

import { useStyles } from "./GuessLogItem.styles";

const GuessLogItem = ({ roundNumber, round }: any) => {
  const { styles } = useStyles();
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {round}</Text>
    </View>
  );
};

export default GuessLogItem;
