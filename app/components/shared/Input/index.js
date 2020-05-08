import React from "react";
import { colors } from "../../../utils/theme";
import { StyleSheet, TextInput } from "react-native";

function Index(props) {
  const { style } = props;
  return (
    <TextInput
      placeholderTextColor={colors.boldGray}
      style={[styles.inputStyles, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  inputStyles: {
    color: colors.boldGray,
    fontSize: 14,
    marginLeft: 10
  }
});
export default Index;
