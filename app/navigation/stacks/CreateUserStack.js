import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateUser } from "../../screens";

const Stack = createStackNavigator();
export default function ListUserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="createUser"
        component={CreateUser}
        options={{ title: "Crear" }}
      />
    </Stack.Navigator>
  );
}
