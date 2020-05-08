import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Loading } from "../index";
import { color } from "react-native-reanimated";
import { colors } from "../../../utils/theme";

function ListFooter(props) {
  const { isLoading } = props;
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text}>No hay más usuarios disponibles</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.boldGray,
    alignSelf: "center"
  }
});
export default ListFooter;
