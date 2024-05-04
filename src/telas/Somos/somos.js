import React from "react";
import { Text, Dimensions,View , StyleSheet,Image} from "react-native";
import Topo from "../../componentes/Topo";
import instagramIcon from "../../../assets/imgs/somos/instagram-somos.png"
import facebookIcon from "../../../assets/imgs/somos/facebook-somos.png"
import Bottom from "../../componentes/Bottom";

const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;

export default function Somos({navigation}) {
  return (
    <View style = {estilos.telaTotal}>
      <Topo navigation={navigation} style= {estilos.estiloTopp} />
      <View style = {estilos.viewInfosPrin}>
        <Text style = {estilos.textSomos}>QUEM SOMOS</Text>
       <View style={estilos.textSpace}> 
            <Text style = {estilos.textSomos}>Na In Time, entendemos que a escolha de um relógio vai além de apenas marcar horas. É uma declaração de estilo, um reflexo da sua personalidade e uma herança para as gerações futuras. </Text>
            <Text style = {estilos.textSomos}>Por isso, selecionamos cada peça com critérios rigorosos de qualidade, design e funcionalidade, garantindo que você receba um produto que atenda às suas expectativas mais elevadas.</Text>
            <Text style = {estilos.textSomos}>Quando você escolhe um relógio In Time, não está apenas adquirindo um acessório de moda, está investindo em um companheiro para todas as horas, um símbolo de sua dedicação ao estilo e à pontualidade. Estamos comprometidos em oferecer a você não apenas produtos de alta qualidade, mas também um serviço excepcional, porque sua satisfação é a nossa prioridade número um.</Text> 
        </View>   
        <View style = {estilos.iconsInfo}>
            <View>
                <Text style ={estilos.textTitle} >Contato</Text>
                <Text style ={estilos.textInfosInferiores} >Email</Text>
                <Text style ={estilos.textInfosInferiores} >Celular</Text>
            </View>
            <View style = {estilos.iconsEdit}>
                <Image source={instagramIcon}/>
                <Image source={facebookIcon}/>
            </View>
        </View>
        
     </View>
     <Bottom navigation={navigation} />
    </View>
  );
}
const estilos = StyleSheet.create({
    telaTotal : {
        width:larguraTela,
        height:alturaTela,
    },
    viewInfosPrin: {
        width:larguraTela,
        height:alturaTela*0.86,
        backgroundColor : "black",
        justifyContent:"space-around",
        alignItems:"center",

        
    },
    textSpace : {
        paddingBottom:30,
        justifyContent : "space-around",
        height:alturaTela*0.6,
        width:larguraTela*0.8,
        fontFamily:"Cinzel"
    },
    textSomos : {
        fontFamily:"Cinzel",
        color:"white",
        fontWeight: "bold",
        
        
    },
    textInfosInferiores: {
        fontWeight :"normal",
        color:"white",
        fontFamily:"Cinzel"
    },
    textTitle : {
        fontSize:16,
        color:"white",
        fontWeight: "bold",
        fontFamily:"Cinzel"
    },
    iconsInfo : {
        flexDirection: "row",
        height:alturaTela*0.1,
        justifyContent: "space-between",
        alignItems:"center",
        width:larguraTela,
        paddingHorizontal:15,

    },
    iconsEdit : {
        width: 50,
        height: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    
    },
    estiloTopp: {
        position: "absolute",
        top: 0,
      },
  
});



