import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { useRef } from "react";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";
const StyledPressable = styled(Pressable);
export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-40 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View className="flex-row gap-4" key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.whiteText}>
              {game.title}
            </Text>
            <Score score={game.score} maxscore={100} />

            <Text className="mt-2 flex-shrink" style={styles.descriptionText}>
              Descripcion
            </Text>
            <Text style={styles.descriptionText}>{game.description}</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
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
