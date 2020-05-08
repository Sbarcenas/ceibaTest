import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../utils/theme";
import { CREATE_USER_SCREEN, USER_LIST_SCREEN } from "./screens";
import * as screens from "./screens";
import { Icon } from "react-native-elements";
import { CreateUserStack, UserListStack } from "./stacks";

const Tab = createBottomTabNavigator();
const screenList = Object.values(screens);

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={USER_LIST_SCREEN}
        tabBarOptions={{
          inactiveTintColor: colors.base,
          activeTintColor: colors.main
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name={CREATE_USER_SCREEN}
          component={CreateUserStack}
          options={{ title: "Crear" }}
        />
        <Tab.Screen
          name={USER_LIST_SCREEN}
          component={UserListStack}
          options={{ title: "Usuarios" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case USER_LIST_SCREEN:
      iconName = "users";
      break;
    case CREATE_USER_SCREEN:
      iconName = "user-plus";
      break;
    default:
      break;
  }
  return <Icon type="font-awesome-5" name={iconName} color={color} size={20} />;
}
