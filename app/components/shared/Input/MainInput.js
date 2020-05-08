import React from "react";
import { colors } from "../../../utils/theme";
import Input from "./";
import { StyleSheet, View } from "react-native";

function MainInput(props) {
  const { Icon, inputStyle, style } = props;
  return (
    <View style={[styles.container, style]}>
      {Icon}
      <View style={styles.inputContainer}>
        <Input {...props} style={[styles.input, inputStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.boldGray,
    height: 37,
    flexDirection: "row"
  },
  inputContainer: { alignSelf: "center", justifyContent: "center", flex: 1 },
  input: { marginLeft: 5, fontSize: 15, width: "100%" }
});
export default MainInput;
