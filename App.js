import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Imports combinados de todas as telas do projeto
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen'; // Supondo que o arquivo se chame assim
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './HomeScreen';
import PontoScreen from './PontoScreen';
import HistoricoScreen from './HistoricoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Telas que já existiam e as que foram adicionadas */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ponto" component={PontoScreen} />
        <Stack.Screen name="Historico" component={HistoricoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}