import react from "react";
import { View , Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions} from "react-native";
import logoPrin from "../../../assets/imgs/login/elegance-logo.png"


const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;
export default function Redefinir(){
    
    return(
        <View style = {estilos.principalEstilo}>

            <Image source={logoPrin}/>
            <View styles = {estilos.viewInput}>
 
                <TextInput style = {estilos.input} placeholder="DIGITE SUA SENHA"/>
                <TextInput style = {estilos.input} placeholder="CONFIRME SUA SENHA"/>
                <TouchableOpacity style = {estilos.button}>
                    <Text style = {estilos.text} >REDEFINIR SENHA</Text>
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
        justifyContent: "start",
        

    },
    viewInput: {
        margin:30,
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
        fontSize: 12,
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

  