import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HistoricoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StagPoint</Text>
      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Histórico de Registros</Text>
        <Ionicons name="filter" size={24} color="black" style={{ marginLeft: 8 }} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.cardGreen}>
          <Text style={styles.date}>27/08/2025</Text>
          <Text style={styles.label}>Horas trabalhadas</Text>
          <View style={styles.row}>
            <Text style={styles.hours}>06h 01m</Text>
            <MaterialIcons name="check" size={28} color="white" />
          </View>
        </View>
        <View style={styles.cardGreen}>
          <Text style={styles.date}>26/08/2025</Text>
          <Text style={styles.label}>Horas trabalhadas</Text>
          <View style={styles.row}>
            <Text style={styles.hours}>06h 03m</Text>
            <MaterialIcons name="check" size={28} color="white" />
          </View>
        </View>
        <View style={styles.cardRed}>
          <Text style={styles.date}>25/08/2025</Text>
          <Text style={styles.label}>Horas trabalhadas</Text>
          <View style={styles.row}>
            <Text style={styles.hours}>00h 00m</Text>
            <MaterialIcons name="error" size={28} color="white" />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={28} color="#bbb" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="time-outline" size={28} color="#bbb" />
          <Text style={styles.navText}>Ponto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={28} color="#007AFF" />
          <Text style={[styles.navText, { color: '#007AFF' }]}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={28} color="#bbb" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1976D2', alignSelf: 'center', marginBottom: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  cardGreen: {
    backgroundColor: '#19B319', borderRadius: 16, padding: 16, marginBottom: 12,
  },
  cardRed: {
    backgroundColor: '#E53935', borderRadius: 16, padding: 16, marginBottom: 12,
  },
  date: { fontStyle: 'italic', color: '#fff', marginBottom: 4 },
  label: { color: '#fff', fontWeight: 'bold', marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  hours: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    borderTopWidth: 1, borderColor: '#eee', paddingVertical: 8, marginTop: 8,
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#bbb', marginTop: 2 },
});
