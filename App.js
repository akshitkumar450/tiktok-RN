import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Navigation from "./navigation/Navigation";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return (
    <View style={tw`flex-1 mt-8`}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}
