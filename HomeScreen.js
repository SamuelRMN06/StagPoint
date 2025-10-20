
import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerHome}>

      <Text style={styles.titleHome}>StagPoint</Text>
      <View style={styles.welcomeCard}>
        <View>
          <Text style={styles.welcomeText}>Olá, Deyverson</Text>
          <Text style={styles.subText}>Hoje é Quinta-Feira</Text>
        </View>
        <Ionicons name="person-circle-outline" size={50} color="white" />
      </View>

      <Text style={styles.sectionTitle}>Horas Trabalhadas Semanal</Text>
      <Text style={styles.hoursText}>18h 14m</Text>

      <View style={styles.row}>
        <View style={[styles.statusCard, { backgroundColor: "#00C851" }]}>
          <Text style={styles.statusTitle}>Entrada às</Text>
          <Text style={styles.statusTime}>8h 01m</Text>
          <Text style={styles.statusFooter}>Concluído</Text>
        </View>

        <View style={[styles.statusCard, { backgroundColor: "#FF8800" }]}>
          <Text style={styles.statusTitle}>Saída</Text>
          <Text style={styles.statusTime}>Pendente</Text>
        </View>
      </View>

      <View style={styles.reminder}>
        <Ionicons name="alert-circle-outline" size={20} color="#0066FF" />
        <Text style={styles.reminderText}>Não se esqueça de registrar o ponto</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={28} color="#0066FF" />
          <Text style={[styles.navText, { color: "#0066FF" }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate("Ponto")}>
          <Ionicons name="checkmark-done-circle-outline" size={28} color="#999" />
          <Text style={styles.navText}>Ponto</Text>
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

export default HomeScreen;
