import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListUser } from "../../screens";

const Stack = createStackNavigator();
export default function ListUserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="userList"
        component={ListUser}
        options={{ title: "Usuarios" }}
      />
    </Stack.Navigator>
  );
}
