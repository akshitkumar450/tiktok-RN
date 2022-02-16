import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return (
    <View style={tw`flex-1 mt-8`}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
