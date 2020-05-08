import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../utils/theme";
import { Icon } from "react-native-elements";

function ListTextItem(props) {
  const {
    text,
    type = "FontAwesome",
    name,
    size,
    color,
    textStyle,
    iconContStyle,
    style,
    onPress
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={[{ marginRight: 10 }, iconContStyle]}>
        <Icon
          name={name || "circle"}
          size={size || 15}
          color={color || colors.white}
          type={type}
        />
      </View>
      <Text
        style={[
          { color: color || colors.white, alignSelf: "center" },
          textStyle
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  }
});
export default ListTextItem;
