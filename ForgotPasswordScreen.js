import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleSendCode = () => {
    console.log("Código enviado para:", email);
  };

  const handleRecover = () => {
    console.log("Email:", email);
    console.log("Código:", code);
    console.log("Nova senha:", newPassword);
    navigation.navigate("Login"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>StagPoint</Text>

      <Image
        source={require("./assets/illustration.png")}
        style={styles.illustration}
      />

      <View style={styles.formContainer}>
        <Text style={styles.recoverTitle}>Recuperar senha</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="deyverson@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.codeButton} onPress={handleSendCode}>
          <Text style={styles.codeButtonText}>Enviar código</Text>
        </TouchableOpacity>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>CÓDIGO</Text>
          <TextInput
            style={styles.input}
            placeholder="1234"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>NOVA SENHA</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={secureText}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Ionicons
                name={secureText ? "eye-off" : "eye"}
                size={22}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleRecover}>
          <Text style={styles.loginButtonText}>Recuperar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;