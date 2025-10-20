import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const HistoryScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.containerHome}>
      <View style={styles.headerHistory}>
        <Text style={styles.titleHome}>StagPoint</Text>

        <View style={styles.historyHeaderRow}>
          <Text style={styles.sectionTitle}>Histórico de Registros</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="filter-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Registros */}
      <View style={styles.historyList}>
        <View style={[styles.historyCard, { backgroundColor: "#00C851" }]}>
          <Text style={styles.historyDate}>27/08/2025</Text>
          <Text style={styles.historyHours}>Horas trabalhadas</Text>
          <Text style={styles.historyTime}>06h 01m</Text>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color="white"
            style={styles.historyIcon}
          />
        </View>

        <View style={[styles.historyCard, { backgroundColor: "#00C851" }]}>
          <Text style={styles.historyDate}>26/08/2025</Text>
          <Text style={styles.historyHours}>Horas trabalhadas</Text>
          <Text style={styles.historyTime}>06h 03m</Text>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color="white"
            style={styles.historyIcon}
          />
        </View>

        <View style={[styles.historyCard, { backgroundColor: "#ff4444" }]}>
          <Text style={styles.historyDate}>25/08/2025</Text>
          <Text style={styles.historyHours}>Horas trabalhadas</Text>
          <Text style={styles.historyTime}>00h 00m</Text>
          <Ionicons
            name="alert-circle-outline"
            size={24}
            color="white"
            style={styles.historyIcon}
          />
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filtre um período</Text>

            <View style={styles.modalField}>
              <Text style={styles.modalLabel}>De:</Text>
              <View style={styles.modalInputContainer}>
                <Ionicons name="calendar-outline" size={20} color="#999" />
                <TextInput
                  style={styles.modalInput}
                  placeholder="01/08/2025"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            <View style={styles.modalField}>
              <Text style={styles.modalLabel}>Até:</Text>
              <View style={styles.modalInputContainer}>
                <Ionicons name="calendar-outline" size={20} color="#999" />
                <TextInput
                  style={styles.modalInput}
                  placeholder="27/08/2025"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Exportar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


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
          onPress={() => navigation.navigate("Ponto")}
        >
          <Ionicons name="checkmark-done-circle-outline" size={28} color="#999" />
          <Text style={styles.navText}>Ponto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={28} color="#0066FF" />
          <Text style={[styles.navText, { color: "#0066FF" }]}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={28} color="#999" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
