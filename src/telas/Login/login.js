import react from "react";
import { View , Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions} from "react-native";
import logoPrin from "../../../assets/imgs/login/elegance-logo.png"
import { useState,useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getUsers } from "../../mock/users";


const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;

export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setAuth, setUser} = useContext(AuthContext);
    
    
   
    
      const handleEmailChange = (text) => {
        setEmail(text);
      };
    
      const handleSenhaChange = (text) => {
        setPassword(text);
      };
    
    
    const handleLogin = ()=> {
        const users =getUsers();

        const user =users.find((user)=> user.email === email && user.password === password);
        if(user) {
            setAuth(true);
            setUser(user);
            navigation.navigate("Home");
        }else{
            alert("Erro ao logar!");
        }
    }

    return(
        

        <View style = {estilos.principalEstilo}>
            <Image source={logoPrin}/>
            <View style = {estilos.viewInput}>

                <TextInput style = {estilos.input} placeholder="Email" onChangeText={handleEmailChange}/>
                <TextInput style = {estilos.input} placeholder="Senha" onChangeText={handleSenhaChange}/>
                <TouchableOpacity style = {estilos.button} >
                    <Text style = {estilos.text} onPress={handleLogin} >Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= { ()=> navigation.navigate("Recuperacao") } >
                    <Text style = { estilos.textWhite}>Esqueceu a senha ?</Text>
                </TouchableOpacity>
            </View>
            <View style = {estilos.cadastroView}>
                <Text style = { estilos.textWhite}>AINDA NÃO POSSUI UMA CONTA?</Text>
                <TouchableOpacity onPress= { ()=> navigation.navigate("Cadastro") } >
                    <Text style = { estilos.textWhiteLink}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    principalEstilo :{
        backgroundColor : "#181818",
        width: larguraTela,
        height: alturaTela,
        alignItems: "center",
        justifyContent: "space-around",
        

    },
    viewInput: {
        alignItems: "center",
        justifyContent: "center",
    },
    cadastroView : {
        alignItems: "center",
        justifyContent: "center",
    },

    input : {
        height:40,
        width:247,
        margin:12,
        padding:10,
        borderWidth: 0.5,
        backgroundColor: "white"

    },
    button: {
        backgroundColor: "#BD8334",
        padding: 10,   
        width:247,
        margin : 12, 
      },
      text: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
        fontFamily:"Cinzel"
      },

      textWhite:{
        color: "white",
        fontSize: 12,
        margin: 12,
        fontFamily:"Cinzel"
      },
      textWhiteLink:{
        color: "white",
        fontSize: 10,
        margin: 12,
        textDecorationLine: 'underline',
        fontFamily:"Cinzel"
      },


});
