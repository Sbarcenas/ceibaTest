import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-easy-toast";
import { useDispatch } from "react-redux";
import { addUser, getUsers } from "../redux/actions/usersActions";
import * as Yup from "yup";
import { Formik } from "formik";
import { Avatar, Button, Icon } from "react-native-elements";
import { AvatarPic, MainInput } from "../components/shared";
import { colors } from "../utils/theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { getMainErrorYup } from "../utils/helpers";

function CreateUser(props) {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const userSchema = Yup.object().shape({
    avatar: Yup.string().required("El avatar es requerido"),
    first_name: Yup.string("El nombre debe ser una cadena de texto").required(
      "El nombre es requerido"
    ),
    last_name: Yup.string("El apellido debe ser una cadena de texto").required(
      "El apellido es requerido"
    ),
    email: Yup.string("El email debe ser una cadena de texto")
      .required("Ingresa el email con el que deseas registrarte")
      .email("Ingresa un email valido")
  });
  useEffect(() => {
    dispatch(getUsers());
  }, [toast]);

  const changeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    console.info(resultPermission);
    const resultPermissionCamera =
      resultPermission.permissions.cameraRoll.status;
    if (resultPermissionCamera === "denied") {
      toast.current.show("Es necesario aceptar los permisos");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: (4, 3)
      });
      return result.uri;
    }
  };

  const onAdd = async (values, { resetForm }) => {
    await dispatch(addUser(values));
    resetForm({});
    toast.current.show("Usuario añadido con éxito");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bounces={false}
      centerContent
    >
      <Formik
        enableReinitialize
        validationSchema={userSchema}
        initialValues={{
          first_name: "",
          last_name: "",
          email: ""
        }}
        onSubmit={onAdd}
      >
        {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
          <View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <AvatarPic
                source={values.avatar}
                onAccessoryPress={async () => {
                  const avatar = await changeAvatar();
                  setFieldValue("avatar", avatar);
                }}
              />
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.errorText}>{getMainErrorYup(errors)}</Text>

              <MainInput
                accessibilityLabel="input"
                onChangeText={handleChange("first_name")}
                value={values.first_name}
                placeholder={"Primer nombre"}
                style={styles.input}
                Icon={
                  <Icon
                    type="font-awesome-5"
                    name="signature"
                    style={styles.inputIcon}
                  />
                }
              />
              <MainInput
                accessibilityLabel="input"
                onChangeText={handleChange("last_name")}
                value={values.last_name}
                placeholder={"Segundo nombre"}
                style={styles.input}
                Icon={
                  <Icon
                    type="font-awesome-5"
                    name="signature"
                    style={styles.inputIcon}
                  />
                }
              />
              <MainInput
                accessibilityLabel="input"
                onChangeText={handleChange("email")}
                value={values.email}
                placeholder={"Correo electronico"}
                style={styles.input}
                Icon={
                  <Icon
                    type="font-awesome-5"
                    name="envelope"
                    style={styles.inputIcon}
                  />
                }
              />

              <Button
                title="Añadir"
                titleStyle={styles.textButton}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
      <Toast ref={toast} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  inputIcon: {
    color: colors.boldGray,
    alignSelf: "center"
  },
  input: {
    marginBottom: 10,
    width: "90%"
  },
  formContainer: {
    marginTop: 30,
    alignItems: "center"
  },
  textButton: {
    marginHorizontal: 30
  },
  errorText: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontWeight: "300",
    fontSize: 12,
    color: colors.red
  }
});
export default CreateUser;
