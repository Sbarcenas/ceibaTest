import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

function UserCard(props) {
  const { email, first_name, last_name, avatar } = props;
  useEffect(() => {
    console.info(props);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: avatar }}
        style={{ width: 100, height: 100, borderRadius: 100 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {first_name} {last_name}
        </Text>
        <Text style={styles.subTitle}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "95%",
    paddingLeft: 5,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  subTitle: {
    fontWeight: "200",
    fontSize: 12
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center"
  }
});
export default UserCard;
