import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ESTILOS GERAIS (LOGIN, REGISTRO)
  container: {
    flex: 1,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  illustration: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
    padding: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 12,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  passwordContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'space-between',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#0066FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#0044CC',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // SEUS ESTILOS PARA RECUPERAR SENHA
  recoverTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  codeButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 25,
  },
  codeButtonText: {
    color: "#0066FF",
    fontSize: 16,
    fontWeight: "bold",
  },

  // ESTILOS DOS SEUS COLEGAS (HOME, PONTO, ETC.)
  // HOME
  containerHome: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 50,
    paddingBottom: 90,
  },
  titleHome: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0066FF",
    textAlign: "center",
    marginBottom: 30,
  },
  welcomeCard: {
    backgroundColor: "#0066FF",
    borderRadius: 20,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  welcomeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    color: "white",
    fontSize: 15,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
  },
  hoursText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  statusCard: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusTitle: {
    color: "white",
    fontSize: 15,
  },
  statusTime: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  statusFooter: {
    color: "white",
    fontSize: 15,
  },
  reminder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 100,
  },
  reminderText: {
    color: "#0066FF",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 50,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 13,
    color: "#666",
    marginTop: 3,
  },
  // Tela Registro Ponto
  clockCard: {
    backgroundColor: "#0066FF",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  clockLabel: {
    color: "white",
    fontSize: 16,
  },
  clockTime: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  switchButton: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 5,
  },
  switchInactiveGray: {
    backgroundColor: "#e0e0e0",
  },
  switchActiveBlue: {
    backgroundColor: "#0066FF",
  },
  switchActiveGray: {
    backgroundColor: "#bfbfbf",
  },
  switchText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  switchTextInactiveGray: {
    color: "#999",
  },
  switchTextActiveBlue: {
    color: "#fff",
  },
  switchTextActiveGray: {
    color: "#fff",
  },
  observationContainer: {
    marginBottom: 25,
  },
  observationLabel: {
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  observationInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    padding: 15,
    textAlignVertical: "top",
    minHeight: 100,
    fontSize: 14,
  },
  registerButtonPonto: {
    backgroundColor: "#0066FF",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 80,
  },
  registerButtonTextPonto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;