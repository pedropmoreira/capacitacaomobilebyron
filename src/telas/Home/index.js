import React from "react";
import Topo from "../../componentes/Topo";
import imgHome from "../../../assets/imgs/home/Home.png";
import imgWatch from "../../../assets/imgs/home/relogio-home.png";
import conosco from "../../../assets/imgs/home/conosco-home.png";
import somos from "../../../assets/imgs/home/somos-home.png";
import products from "../../mock/products";


import {
  Image,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  
} from "react-native";
import Bottom from "../../componentes/Bottom";
import RelogiosCards from './../../componentes/RelogiosCards';


const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;

export default function Home({navigation}) {


  return (
    <View style={estilos.sizeTela}>
      {/*Header*/}
      <Topo navigation={navigation} />
      {/*Scroll full*/}
      <ScrollView>
        {/*BG*/}
        <View>
          <ImageBackground
            source={imgHome}
            style={estilos.bg}
          ></ImageBackground>
        </View>
        {/*Segunda view*/}
        <View style={estilos.viewTwo}>
          <View style = {estilos.viewTwoSon}>
            {/*Imagem da segunda view*/}
            <Image source={imgWatch} style = {estilos.imagemWatch} />
            {/*Textos da segunda view*/}
            <View style={estilos.textSize}>
              <Text style={estilos.text}>
                Na In Time, nós acreditamos que cada momento da sua vida é único
                e merece ser vivido com estilo e elegância.
              </Text>

              <Text style={estilos.text}>
                Desde o nosso início, nos comprometemos em oferecer relógios
                masculinos que não apenas acompanhem o seu dia a dia, mas também
                se tornem uma extensão do seu estilo pessoal.
              </Text>
              
            </View>
          </View>
        </View>
        {/*RELOGIOS STATICOS*/}
        <View style = { estilos.viewWatchs }>
            <Text style = {estilos.viewWatchTitle }>OS MAIS VENDIDOS</Text>
            {/*VIEW DOS RELOGIOS */}
            <View style = {estilos.watchPosi}>
                <RelogiosCards produtosNoCarrinho={products} buttonOn={true}/>
                
            </View>
        </View>
        {/*VIEW DO SOBRE */}
        <View style = {estilos.viewInfo}>
            {/*VIEW DO SOBRE */}
            <ImageBackground style = {estilos.infosImg} source = {somos}>
            <TouchableOpacity onPress= { ()=> navigation.navigate("Somos") }>
                <View style = {estilos.viewText }>
                    <Text style = {estilos.textInfo} >Quem somos</Text>
                </View>
            </TouchableOpacity>
            </ImageBackground>
            
            {/*FALE CONOSCO*/}
            <ImageBackground style = {estilos.infosImg} source={conosco}>
                <TouchableOpacity onPress= { ()=> navigation.navigate("Somos") }>
                    <View style = {estilos.viewText }>
                        <Text style = {estilos.textInfo}>Fale conosco</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>

      </ScrollView>
      <Bottom  navigation={navigation} />
    </View>
  );
}

const estilos = StyleSheet.create({

    sizeTela: {
        width: larguraTela,
        height: alturaTela,

      },
 
    bg: {

    width: larguraTela,
    height: alturaTela * 0.35,
     },
     viewTwo: {
        width: larguraTela,
        height: 0.5 * alturaTela,

      
        justifyContent: "center"

     },
     viewTwoSon: {

        flexDirection: "row",
        justifyContent : "space-around",
        alignItems: "center",
        
        
        
     }, 
     textSize : {
        width: 152,
        height: 130,
        fontFamily:"Cinzel"

     },

     text: {
        fontSize: 9, 
        fontFamily:"Cinzel"
     },

     viewWatchs : {
        backgroundColor : "#181818" , 
        height : "auto",
        width : larguraTela,
        alignItems:"center",
        justifyContent: "center",
        
        

     },
     viewWatchTitle : {
        fontSize: 16 ,
        color: "#BD8334",
        padding:70,
        
     },
     watchPosi: {
        flexDirection:"row",
        flexWrap : "wrap",

        justifyContent: "center",
       
        

     }, 
     viewInfo : {
        flexDirection: "row",
        backgroundColor : "white",
        width: larguraTela,
        height: alturaTela * 0.5 ,
        alignItems: "center",
        justifyContent : "space-around",

     },
     infosImg : {
        width:170,
        height:190,
    
        
        

     },
     textInfo : {
        color : "white",
        padding: "auto",

        padding:6,
        margin:10,
        fontFamily:"Cinzel"
        
        
     },


     viewText : {
        flexDirection : "column-reverse",
        width:170,
        height:190
        ,
        alignItems: "center",
        justifyContent: "end",

        fontFamily:"Cinzel"
        

        
     }
     
    


  
});
