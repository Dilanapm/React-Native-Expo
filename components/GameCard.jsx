import { useEffect } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { useRef } from "react";
export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.whiteText}>{game.title}</Text>
      <Text style={styles.descriptionText}>Descripcion</Text>
      <Text style={styles.descriptionText}>{game.description}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  whiteText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#d3d3d3",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  card: {
    marginBottom: 50,
    alignItems: "center",
  },
});
