import react from "react";
import{Text, View, Image, StyleSheet , TouchableOpacity} from "react-native"
import logo from "../../assets/imgs/header/logo-header.png"
import pesquisa from "../../assets/imgs/header/pesquisa-header.png"

export default function Topo({navigation}) {
    
    return <View style = {estilos.topo}>
        <TouchableOpacity onPress= { ()=> navigation.navigate("Home") }>
            <Image source = {logo} />
        </TouchableOpacity>
        
        <Image source = {pesquisa}/>
    </View>
}


const estilos = StyleSheet.create ({
    topo: {
        backgroundColor:"#181818",
        paddingTop: 13, 
        paddingBottom: 13, 
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        width: '100%',
        
        
        

    },
    //se pa nem precisa 
    imagem : {
        width:92,
        height:41,
    }
});
