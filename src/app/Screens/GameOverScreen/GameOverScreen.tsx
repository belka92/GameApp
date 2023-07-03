import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import Title from "../../components/shared/Title/Title";
import PrimaryButton from "../../components/shared/PrimaryButton/PrimaryButton";

import { useStyles } from "./GameOverScreen.styles";

export type GameOverProps = {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
};

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverProps) => {
  const { styles } = useStyles();
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 300) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../../assets/images/success.jpeg")}
          />
        </View>
        <Text style={styles.summeryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
