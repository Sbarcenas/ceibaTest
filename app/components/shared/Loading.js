import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { Overlay } from "react-native-elements";
import { colors } from "../../utils/theme";
import { color } from "react-native-reanimated";

function Loading(props) {
  const { isVisible, text } = props;
  return (
    <Overlay
      windowBackgroundColor="rgba(0,0,0,0.4)"
      overlayBackgroundColor="transparent"
      isVisible={isVisible}
      overlayStyle={styles.container}
    >
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.base} />
        {text && <Text style={styles.loadingText}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    minWidth: 100,
    maxWidth: 250,
    backgroundColor: colors.white
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    color: colors.base,
    marginVertical: 10
  }
});

export default Loading;
