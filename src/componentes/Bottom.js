import React from "react";
import { View } from "react-native";
import cartIcon from "../../assets/imgs/bottom/cart-bottom.png"
import homeIcon from "../../assets/imgs/bottom/home-bottom.png"
import infoIcon from "../../assets/imgs/bottom/info-bottom.png"
import profileIcon from "../../assets/imgs/bottom/profile-bottom.png"
import { Image ,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
{/*onPress= { ()=> navigation.navigate("Cadastro") }*/}

export default function Bottom({navigation}){
    return <View style ={estilos.bottom}>

           <TouchableOpacity onPress= { ()=> navigation.navigate("Home") } >
            <Image style={estilos.imagem} source ={homeIcon}  />
           </TouchableOpacity>
           <TouchableOpacity onPress= { ()=> navigation.navigate("Carrinho") } >
            <Image style={estilos.imagem} source ={cartIcon}  />
           </TouchableOpacity>
           <TouchableOpacity onPress= { ()=> navigation.navigate("Profile") } >
             <Image style={estilos.imagem} source ={profileIcon}  />
           </TouchableOpacity>
           <TouchableOpacity onPress= { ()=> navigation.navigate("Somos") }>
             <Image style={estilos.imagem} source ={infoIcon}  />
           </TouchableOpacity>
            
                 

    </View>
}
const estilos = StyleSheet.create ({
    bottom: {
        backgroundColor:"white",
        paddingTop: 13, 
        paddingBottom: 13, // Adiciona padding de 20 unidades no topo
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        width: '100%',
        heihgt:"auto",
        position: 'absolute',
        bottom: 0,
    },
 
    imagem : {
        width:18,
        height:18,
    },
    
});
