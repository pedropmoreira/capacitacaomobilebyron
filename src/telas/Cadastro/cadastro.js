import react from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import logoPrin from "../../../assets/imgs/login/elegance-logo.png";
import cadastrarUsuario from "../../servicos/api/usuarioServico";
import { useState } from "react";
import { Alert } from "react-native";
import { getUsers } from "../../mock/users";

const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;
export default function Cadastro({navigation}) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const handleNomeChange = (text) => {
    setNome(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const handleCadastro = async () => {
    try {
      await cadastrarUsuario({ nome, email, senha });
      Alert.alert('Usuário cadastrado');
      setNome('');
      setEmail('');
      setSenha('');
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuário', error.message);
    }
  };

  return (
    <View style={estilos.principalEstilo}>
      <Image source={logoPrin} />
      <View>
        <TextInput style={estilos.input} placeholder="Nome" value={nome} onChangeText={handleNomeChange}/>
        <TextInput style={estilos.input} placeholder="Email" value={email} onChangeText={handleEmailChange}/>
        <TextInput style={estilos.input} placeholder="Senha" value={senha} onChangeText={handleSenhaChange}/>

        <TouchableOpacity style={estilos.button} onPress={handleCadastro}>
          <Text style={estilos.text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  principalEstilo: {
    backgroundColor: "#181818",
    width: larguraTela,
    height: alturaTela,
    alignItems: "center",
    justifyContent: "center",
  },
  viewInput: {
    width: larguraTela,
    height: alturaTela,
  },

  input: {
    height: 40,
    width: 247,
    margin: 12,
    padding: 10,
    borderWidth: 0.5,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#BD8334",
    padding: 10,
    width: 247,
    margin: 12,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontFamily:"Cinzel"
  },

  textWhite: {
    color: "white",
    fontSize: 10,
    margin: 12,
    fontFamily:"Cinzel"
  },
  textWhiteLink: {
    color: "white",
    fontSize: 10,
    margin: 12,
    textDecorationLine: "underline",
    fontFamily:"Cinzel"
  },
});
