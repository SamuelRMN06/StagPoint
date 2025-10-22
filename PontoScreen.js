import React from "react";
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const PontoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerHome}>

      <Text style={styles.titleHome}>StagPoint</Text>

      {}
      <View style={styles.clockCard}>
        <View>
          <Text style={styles.clockLabel}>Horário Atual</Text>
          <Text style={styles.clockTime}>14:02:00</Text>
        </View>
        <Ionicons name="time-outline" size={40} color="#fff" />
      </View>

      {}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, styles.switchInactiveGray]}
        >
          <Text style={[styles.switchText, styles.switchTextInactiveGray]}>Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.switchButton, styles.switchActiveBlue]}
        >
          <Text style={[styles.switchText, styles.switchTextActiveBlue]}>Saída</Text>
        </TouchableOpacity>
      </View>

      {}
      <View style={styles.observationContainer}>
        <Text style={styles.observationLabel}>Observação:</Text>
        <TextInput
          style={styles.observationInput}
          placeholder="Digite aqui ..."
          multiline
          numberOfLines={4}
        />
      </View>

      {}
      <TouchableOpacity style={styles.registerButtonPonto}>
        <Text style={styles.registerButtonTextPonto}>Registrar</Text>
      </TouchableOpacity>

      {}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home-outline" size={28} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="checkmark-done-circle-outline" size={28} color="#0066FF" />
          <Text style={[styles.navText, { color: "#0066FF" }]}>Ponto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("History")}>
          <Ionicons name="calendar-outline" size={28} color="#999" />
          <Text style={styles.navText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={28} color="#999" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default PontoScreen;
