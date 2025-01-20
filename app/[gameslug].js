import { Link } from "expo-router";
import {
  ActivityIndicator,
  ImageBackground,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router"; // se llama stack porque se pone encima de la pantalla
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "asdfñjasklñ{f",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#ffff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className = "justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.image }}
                style={{ width: 214, height: 294 }}
              />
              <Text className="text-white font-bold mb-8 text-2xl">
                {gameInfo.title}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
      <View></View>
    </Screen>
  );
}
