import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListView from "deprecated-react-native-listview";
import { ListFooter, UserCard } from "../components";
import { getUsers } from "../redux/actions/usersActions";

/*
 * In this component, we're going to use ListView to list, users
 * Note: The best way to list users is using FlatList, but I'm following the exercises instructions.
 * */

function ListUser(props) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
  const [dataSource, setDataSource] = useState(ds.cloneWithRows([]));
  const listUsers = async () => {
    await dispatch(getUsers(users.page));
  };

  useEffect(() => {
    listUsers();
  }, []);

  useEffect(() => {
    setDataSource(ds.cloneWithRows(users.usersList));
    console.info(users.usersList[0]);
  }, [users.usersList]);

  return (
    <View>
      {users.usersList.length > 0 ? (
        <ListView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          enableEmptySections
          dataSource={dataSource}
          onEndReached={listUsers}
          onEndReachedThreshold={0.5}
          renderRow={props => <UserCard {...props} />}
          renderFooter={props => <ListFooter isLoading={users.isLoading} />}
        />
      ) : (
        <View style={styles.usersLoader}>
          <ActivityIndicator size="large" />
          <Text>Cargando usuarios</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  usersLoader: {
    alignItems: "center",
    marginVertical: 10
  }
});

export default ListUser;
