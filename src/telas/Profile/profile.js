import react from "react";
import { View, Text ,Image, StyleSheet, Dimensions, TextInput} from 'react-native';
import photo from "../../../assets/imgs/profile/photo.png"
import Bottom from "../../componentes/Bottom";
import { useState ,useEffect,useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Topo from "../../componentes/Topo";
import { TouchableOpacity } from "react-native-gesture-handler";
const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;

export default function Profile({navigation}){
    const {user } =useContext(AuthContext);
    const {setAuth, setUser} = useContext(AuthContext);

    const handleAuth = ()=> {
        setAuth(false);
        navigation.navigate("Login");
    }
    return (
        <View style = {estilos.principalEstilo}>
            <Topo navigation={navigation} style= {estilos.estiloTopp} />
            <View style = {estilos.principalEstiloDois} >
                <Image style = {estilos.image} source ={photo}/>
                <View>
                    <Text style = {estilos.textWhite} >NOME</Text>
                    <TextInput style = {estilos.input} placeholder={user? user.name : "Nome"}/>
                    <Text style = {estilos.textWhite} >E-MAIL</Text>
                    <TextInput style = {estilos.input} placeholder={user? user.email : "e-mail"}/>
                    <Text style = {estilos.textWhite} >Telefone</Text>
                    <TextInput style = {estilos.input} placeholder={user? user.phone : "phone"}/>
                </View>
                <View style = {estilos.inputDuo}>
                    <View >
                        <Text style = {estilos.textWhite} >CEP</Text>
                        <TextInput style = {[estilos.input , estilos.inputCep]} placeholder={user? user.cep : "cep"}/>
                    </View>
                    <View>
                        <Text style = {estilos.textWhite} >NRO</Text>
                        <TextInput style = {[estilos.input ,  estilos.inputNro]} placeholder={user? user.id : "id"}/>
                    </View>
                </View>
                <TouchableOpacity onPress={handleAuth}>
                    <Text style = { estilos.textWhiteLink}>Sair</Text>
                </TouchableOpacity>
                
                
            </View>
            <Bottom style = {estilos.bottom} navigation={navigation}/>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    principalEstilo :{
        backgroundColor : "#181818",
        width: larguraTela,
        height: alturaTela,

        justifyContent: "space-between",
        alignItems: "center"


    },
      textWhite:{
        color: "white",
        fontSize: 12,
        margin: 12,
        width:"auto",

        fontFamily:"Cinzel"
        
      },
      bottom: {
        position: 'absolute',
        bottom: 0,
        width: larguraTela,
        paddingBottom: 20, // Espaço opcional para garantir que o conteúdo do Bottom seja visível
    },
    image: {
        width: 150,
        height: 150,
        borderRadius:75,

    },
    input : {
        height:40,
        width:247,
        margin:12,
        padding:10,
        borderWidth: 0.5,
        backgroundColor: "white",
        

    },
    inputDuo: {
        flexDirection : "row",
        width: 300,
        alignItems: "center",
        justifyContent: "space-between",
        
        
    },
    inputNro : {
        width: 101,
        
    },
    inputCep : {
        width: 129,
    },
    textWhiteLink:{
        color: "white",
        fontSize: 14,
        margin: 12,
        textDecorationLine: 'underline',
        width:"auto",
        fontFamily:"Cinzel"
        
      },
      principalEstiloDois :{
        height: alturaTela *0.8,
        
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom:alturaTela * 0.1,


    },
    estiloTopp: {
        position: 'absolute',
        top: 0,
      }
      

});

  