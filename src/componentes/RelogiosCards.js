import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import imgWatchReal from "../../assets/imgs/cardrelogio/relogio-card.png";
import { carregaProdutos } from "../servicos/carregaDados";
import { FlatList } from "react-native-gesture-handler";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function RelogiosCards({produtosNoCarrinho , buttonOn}) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosCarregados = carregaProdutos();
    setProdutos(produtosCarregados);
  }, []);

  const { adicionarAoCarrinho } = useContext(AuthContext);

  const renderizarItem = ({ item }) => {
    return (
      <View style={estilos.viewPrincipal}>
        <Image source={item.imageUrl} style={estilos.imagemWatch} />
        <View>
          <Text style={estilos.textNome}>{item.name}</Text>
          <View style={estilos.displayEstoquePreco}>
            <Text style={estilos.textEstoque}>Estoque : {item.stock}</Text>
            <Text style={estilos.textPreco}>PREÇO: {item.price}</Text>
          </View>
        </View>
        {buttonOn ? (
        <TouchableOpacity style={estilos.button} onPress={() => adicionarAoCarrinho(item)}>
          <Text style={estilos.text}>Comprar</Text>
        </TouchableOpacity>
      ) : null}
      </View>
    );
  };

  return (
    <FlatList
      data={produtosNoCarrinho}
      renderItem={renderizarItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}
    />
  );
}

const estilos = StyleSheet.create({
  viewPrincipal: {
    borderColor: "#BD8334",
    borderWidth: 0.5,
    paddingHorizontal: 15,
    marginBottom: 30,
    alignItems: "center",
    justifyContent:"space-around",
    width:190,
    height:240
  },
  button: {
    backgroundColor: "#BD8334",
    padding: 4,
    width: 80,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
    fontFamily:"Cinzel"
  },
  textNome: {
    fontSize: 14,
    color: "#BD8334",
    fontFamily:"Cinzel"
  },
  textEstoque: {
    color: "#8F8F8F",
    fontSize: 10,
    fontFamily:"Cinzel"
  },
  textPreco: {
    color: "#BD8334",
    fontSize: 12,
    fontFamily:"Cinzel"
  },
  imagemWatch: {
    width: 154,
    height: 128,
    
  },
  displayEstoquePreco: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 155,
  },
});
