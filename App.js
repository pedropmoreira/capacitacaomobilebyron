import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigation from "./src/rotas/navigation";
import Bottom from "./src/componentes/Bottom";
import AuthProvider from "./src/context/AuthContext";
import { useFonts } from "expo-font";


export default function App() {
  const [loaded] = useFonts({
  Cinzel : require('./assets/fonts/Cinzel-VariableFont_wght.ttf')
  });

  if(!loaded){
    return null
  }
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#BD8334" />
        <Navigation />
        
      </SafeAreaView>
    </AuthProvider>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
