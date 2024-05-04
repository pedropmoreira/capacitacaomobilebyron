import react from "react";

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Topo from "../../componentes/Topo";
import Bottom from "../../componentes/Bottom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import RelogiosCards from "../../componentes/RelogiosCards";
import { ScrollView } from "react-native-gesture-handler";

const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;

export default function Carrinho({ navigation }) {
  const { carrinho, precoTotal, removerDoCarrinho } = useContext(AuthContext);

  return (
    <View style={estilos.principalEstilo}>
      <View style={estilos.estiloTopp}>
        <Topo navigation={navigation} />
      </View>
      <View style={estilos.viewDois}>
        <ScrollView style={estilos.scrollV}>
          {carrinho.length > 0 ? (
            <RelogiosCards produtosNoCarrinho={carrinho} buttonOn={false} />
          ) : (
            <Text style = {[estilos.text , estilos.textSize]}>SEU CARRINHO DE COMPRAS ESTÁ VAZIO</Text>
          )}

        </ScrollView>
        <Text style={estilos.textGold}>
          Preço do carrinho : {precoTotal} R$
        </Text>
        <TouchableOpacity>
          <Text style={estilos.textGold}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removerDoCarrinho}>
          <Text style={estilos.textGold}>Limpar carrinho</Text>
        </TouchableOpacity>
      </View>
      <Bottom navigation={navigation} />
    </View>
  );
}

const estilos = StyleSheet.create({
  principalEstilo: {
    backgroundColor: "white",
    width: larguraTela,
    height: alturaTela,
    alignItems: "space-around",
    justifyContent: "space-around",
    
  },
  viewDois: {
    width: larguraTela * 1,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#BD8334",
    padding: 10,
    width: 247,
    margin: 12,
    textAlign: "center",
    fontFamily:"Cinzel"
  },
  textGold: {
    backgroundColor: "#BD8334",
    padding: 10,
    width: 247,
    margin: 12,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    fontFamily:"Cinzel"
  },

  text: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
    fontFamily:"Cinzel"
  },

  textWhite: {
    color: "white",
    fontSize: 10,
    margin: 12,
    fontFamily:"Cinzel"
  },
  estiloTopp: {
    position: "absolute",
    top: 0,
  },
  scrollV: {
    height: alturaTela * 0.5,
  },
  textSize: {

    fontSize: 24,
    padding:6,
    marginTop:alturaTela*0.2,
    fontFamily:"Cinzel"
  },
});
