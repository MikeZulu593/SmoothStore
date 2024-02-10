import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import CheckBox from "expo-checkbox";
import React, { useState } from "react";

export default function App() {
  const [checked, setChecked] = useState(false);
  const image = require("./assets/background.png");

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [nacimiento, setNacimiento] = useState("");

  //LO QUE DEBE PASAR CUANDO EL FORMULARIO SE TERMINA DE EJECUTAR
  //ESTO ES PARA EL ALERT EN CASO DE QUE NO SE LLENEN TODOS LOS CAMPOS
  const handleSubmit = () => {
    if (
      !checked ||
      !nombre ||
      !apellido ||
      !correo ||
      !password ||
      !confirmarPassword ||
      !telefono ||
      !nacimiento
    ) {
      Alert.alert(
        "Aviso",
        `Hay campos incompletos.\n\nRecuerde aceptar los Términos y Condiciones.`
      );
    } else {
      Alert.alert(
        "REGISTRO EXITOSO!",
        `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nTeléfono: ${telefono}\nFecha de Nacimiento: ${nacimiento}`
      );
    }
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.subtitulo}>Cree su cuenta para comenzar</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="white"
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="white"
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="white"
          onChangeText={setCorreo}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="white"
          secureTextEntry={true} //PARA QUE APAREZCAN PUNTOS
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Constrseña"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={setConfirmarPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Número Telefónico"
          placeholderTextColor="white"
          onChangeText={setTelefono}
        />

        <Text style={styles.subtitulo}>Ingrese su fecha de Nacimiento</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/aaaa"
          placeholderTextColor="white"
          onChangeText={setNacimiento }
        />

        <Text style={styles.subtitulo}>Género</Text>
        <Picker
          style={styles.input}
          selectedValue={genero} //MUESTRA EL GENERO SELECCIONADO
          onValueChange={(itemValue) => setGenero(itemValue)}
        >
          <Picker.Item label="Masculino" value="1" color="black" />
          <Picker.Item label="Femenino" value="2" color="black" />
          <Picker.Item label="Otro" value="3" color="black" />
        </Picker>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox value={checked} onValueChange={setChecked} />
          <Text style={styles.subtitulo}>Términos y condiciones</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  titulo: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  subtitulo: {
    fontWeight: "normal",
    color: "white",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 2,
    borderColor: "#bbbbbb",
    borderRadius: 6,
    backgroundColor: "#666666",
    marginVertical: 5,
    paddingHorizontal: 10,
    color: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
  },
});



