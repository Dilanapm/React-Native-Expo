import { Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";
import { Link } from "expo-router";
export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
