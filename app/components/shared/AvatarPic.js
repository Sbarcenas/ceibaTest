import React from "react";
import { Avatar } from "react-native-elements";
import { StyleSheet } from "react-native";

function AvatarPic(props) {
  const { source } = props;

  return (
    <Avatar
      {...props}
      rounded
      size="xlarge"
      showAccessory
      containerStyle={styles.userAvatar}
      source={
        source
          ? {
              uri: source
            }
          : require("../../..//assets/media/images/user.png")
      }
    />
  );
}

const styles = StyleSheet.create({
  userAvatar: { marginTop: 50 }
});

function areEqual(prevProps, nextProps) {
  return prevProps.source === nextProps.source;
}

export default React.memo(AvatarPic, areEqual);
