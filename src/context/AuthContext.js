import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [carrinho, setCarrinho] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    setPrecoTotal(precoTotal + produto.price);
  };

  const removerDoCarrinho = () => {
    setCarrinho([]);
    setPrecoTotal(precoTotal - precoTotal);
  };
  
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        carrinho,
        setCarrinho,
        precoTotal,
        setPrecoTotal,
        removerDoCarrinho,
        adicionarAoCarrinho,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
