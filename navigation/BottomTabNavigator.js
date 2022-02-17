import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import { Image } from "react-native";
import Btn from "../assets/plus-icon.png";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#eee",
        tabBarStyle: {
          height: 50,
          backgroundColor: "black",
        },
        tabBarShowLabel: false, //to hide label
      }}>
      <Tab.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"profile"}
        component={HomeScreen}
        options={{
          title: "Coming soon",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Add Video"}
        component={HomeScreen}
        options={{
          title: "Add video",
          tabBarIcon: ({ color }) => (
            <Image
              source={Btn}
              style={{
                height: "70%",
                width: 50,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Notification"}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"more"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="menu" size={24} color="black" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
