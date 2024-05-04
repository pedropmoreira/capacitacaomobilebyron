import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../telas/Home";
import Somos from "../telas/Somos/somos";
import Login from "../telas/Login/login";
import Cadastro from "../telas/Cadastro/cadastro";
import Recuperacao from "../telas/Recuperacao/recuperacao";
import Redefinir from "../telas/Redefinir/redefinir";
import Profile from "../telas/Profile/profile";
import Carrinho from "../telas/Carrinho/carrinho";
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions = {{
        headerTitle:"",
        headerShown:false
      }}
      >
        
        <Stack.Screen name="Home"
         component={Home} 
          />
        
        <Stack.Screen name="Somos" 
        component={Somos} 
        />
        
        <Stack.Screen name="Login" 
        component={Login} 
        />

        <Stack.Screen name="Cadastro" 
        component={Cadastro} 
        />
        <Stack.Screen name="Recuperacao" 
        component={Recuperacao} 
        />

        <Stack.Screen name="Redefinir" 
        component={Redefinir} 
        />
        <Stack.Screen name="Profile" 
        component={Profile} 
        />
        <Stack.Screen name="Carrinho" 
        component={Carrinho} 
        />     
           

        


      </Stack.Navigator>
    </NavigationContainer>
  );
}
