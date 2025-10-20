import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      {}
      <Text style={styles.title}>StagPoint</Text>

      {}
      <Image
        source={require('./assets/illustration.png')}
        style={styles.illustration}
      />

      {}
      <View style={styles.formContainer}>
        {}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>NOME</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome completo"
            value={name}
            onChangeText={setName}
          />
        </View>

        {}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="email@exemplo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {}
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        {}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.registerButtonText}>Voltar ao Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
