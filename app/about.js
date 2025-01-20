import { ScrollView, Text, Pressable, View } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../components/Screen";
const StyledPressable = styled(Pressable);
export default function About() {
  return (
    <Screen>
      <View className="flex-row justify-between items-center mx-2">
      <Link asChild href="/">
          <StyledPressable className={`active:opacity-40`}>
            <HomeIcon />
          </StyledPressable>
        </Link>
      </View>
      <ScrollView className="pt-10 border">
      <Text className="text-white font-bold mb-8 text-2xl">
          {" "}
          Sobre el proyecto
      </Text>
      
        <Text className="text-white mb-8 text-lg">
          Sint duis magna mollit ea ipsum ut do magna esse minim nostrud.
          Excepteur dolore eiusmod tempor magna cillum est. Laboris duis in ea
          ut exercitation eu laborum deserunt sit velit est. Magna ea ut commodo
          sint deserunt sunt ex veniam sunt laborum dolore. Duis excepteur
          nostrud laboris incididunt minim adipisicing aliqua esse elit sit
          Lorem nulla ut duis. Eiusmod incididunt in sint non in Lorem pariatur
          cupidatat pariatur consequat tempor pariatur consectetur do. Laborum
          est in adipisicing pariatur cupidatat amet est veniam ex sunt. Ex
          laborum culpa dolor dolor officia officia dolor quis aute sint. Et est
          labore deserunt ex sit aliquip.
        </Text>
        <Text className="text-white mb-8 text-lg">
          Sint duis magna mollit ea ipsum ut do magna esse minim nostrud.
          Excepteur dolore eiusmod tempor magna cillum est. Laboris duis in ea
          ut exercitation eu laborum deserunt sit velit est. Magna ea ut commodo
          sint deserunt sunt ex veniam sunt laborum dolore.
        </Text>
        <Text className="text-white mb-8 text-lg">
          Sint duis magna mollit ea ipsum ut do magna esse minim nostrud.
          Excepteur dolore eiusmod tempor magna cillum est. Laboris duis in ea
          ut exercitation eu laborum deserunt sit velit est. Magna ea ut commodo
          sint deserunt sunt ex veniam sunt laborum dolore.
        </Text>
        <Text className="text-white mb-8 text-lg">
          Sint duis magna mollit ea ipsum ut do magna esse minim nostrud.
          Excepteur dolore eiusmod tempor magna cillum est. Laboris duis in ea
          ut exercitation eu laborum deserunt sit velit est. Magna ea ut commodo
          sint deserunt sunt ex veniam sunt laborum dolore. Sint duis magna
          mollit ea ipsum ut do magna esse minim nostrud. Excepteur dolore
          eiusmod tempor magna cillum est. Laboris duis in ea ut exercitation eu
          laborum deserunt sit velit est. Magna ea ut commodo sint deserunt sunt
          ex veniam sunt laborum dolore. Sint duis magna mollit ea ipsum ut do
          magna esse minim nostrud. Excepteur dolore eiusmod tempor magna cillum
          est. Laboris duis in ea ut exercitation eu laborum deserunt sit velit
          est. Magna ea ut commodo sint deserunt sunt ex veniam sunt laborum
          dolore. Sint duis magna mollit ea ipsum ut do magna esse minim
          nostrud. Excepteur dolore eiusmod tempor magna cillum est. Laboris
          duis in ea ut exercitation eu laborum deserunt sit velit est. Magna ea
          ut commodo sint deserunt sunt ex veniam sunt laborum dolore. Sint duis
          magna mollit ea ipsum ut do magna esse minim nostrud. Excepteur dolore
          eiusmod tempor magna cillum est. Laboris duis in ea ut exercitation eu
          laborum deserunt sit velit est. Magna ea ut commodo sint deserunt sunt
          ex veniam sunt laborum dolore.
        </Text>
        <Text className="text-white mb- text-lg">
          Sint duis magna mollit ea ipsum ut do magna esse minim nostrud.
          Excepteur dolore eiusmod tempor magna cillum est. Laboris duis in ea
          ut exercitation eu laborum deserunt sit velit est. Magna ea ut commodo
          sint deserunt sunt ex veniam sunt laborum dolore.
        </Text>
      </ScrollView>
    </Screen>
  );
}
