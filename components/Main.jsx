// import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { getLatestGames } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { CircleInfoIcon } from "./Icons";
// import Constants from 'expo-constants';s
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { Screen } from "./Screen";
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  // useSafeAreaInsets esta dando los espacios tanto arriba como abajo en el mobile
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator color={"white"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
