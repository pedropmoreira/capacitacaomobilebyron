import react from "react";
import { View , Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions} from "react-native";
import logoPrin from "../../../assets/imgs/login/elegance-logo.png"


const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;
export default function Recuperacao(){
    
    return(
        <View style = {estilos.principalEstilo}>

            <Image source={logoPrin}/>
            <Text style = {estilos.textWhite} >Informe um email e enviaremos um link de recuperação da sua senha</Text>
            <View>
 
                <TextInput style = {estilos.input} placeholder="Email"/>
                <TouchableOpacity style = {estilos.button}>
                    <Text style = {estilos.text} >ENVIAR LINK DE RECUPERAÇÃO</Text>
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
        justifyContent: "center",
        

    },
    viewInput: {
        width: larguraTela,
        height: alturaTela,
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
        fontSize: 10,
        fontFamily:"Cinzel"
      },

      textWhite:{
        color: "white",
        fontSize: 12 ,
        fontFamily:"Cinzel",
        margin: 12,
        width:251,
        textAlign: "center",
      },
      textWhiteLink:{
        color: "white",
        fontSize: 10,
        margin: 12,
        textDecorationLine: 'underline',
        fontFamily:"Cinzel"
      },


});

  