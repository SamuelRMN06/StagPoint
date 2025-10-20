import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const PontoScreen = ({ navigation }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [selected, setSelected] = useState("saida");
  const [observation, setObservation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString("pt-BR", {
        hour12: false,
      });
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    console.log(`Ponto ${selected} registrado às ${currentTime}`);
    console.log("Observação:", observation);
  };

  return (
    <SafeAreaView style={styles.containerHome}>

      <Text style={styles.titleHome}>StagPoint</Text>

      <View style={styles.clockCard}>
        <View>
          <Text style={styles.clockLabel}>Horário Atual</Text>
          <Text style={styles.clockTime}>{currentTime}</Text>
        </View>
        <Ionicons name="time-outline" size={40} color="#fff" />
      </View>

      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            selected === "entrada" ? styles.switchActiveBlue : styles.switchInactiveGray,
          ]}
          onPress={() => setSelected("entrada")}
        >
          <Text
            style={[
              styles.switchText,
              selected === "entrada" ? styles.switchTextActiveBlue : styles.switchTextInactiveGray,
            ]}
          >
            Entrada
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.switchButton,
            selected === "saida" ? styles.switchActiveBlue : styles.switchInactiveGray,
          ]}
          onPress={() => setSelected("saida")}
        >
          <Text
            style={[
              styles.switchText,
              selected === "saida" ? styles.switchTextActiveBlue : styles.switchTextInactiveGray,
            ]}
          >
            Saída
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.observationContainer}>
        <Text style={styles.observationLabel}>Observação:</Text>
        <TextInput
          style={styles.observationInput}
          placeholder="Digite aqui ..."
          multiline
          numberOfLines={4}
          value={observation}
          onChangeText={setObservation}
        />
      </View>

      <TouchableOpacity style={styles.registerButtonPonto} onPress={handleRegister}>
        <Text style={styles.registerButtonTextPonto}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home-outline" size={28} color="#999" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
      >
        <Ionicons name="checkmark-done-circle-outline" size={28} color="#0066FF" />
        <Text style={[styles.navText, { color: "#0066FF" }]}>Ponto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}
      onPress={() => navigation.navigate("History")}>
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
