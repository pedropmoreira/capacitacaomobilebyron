import axios from "axios";
import users from "../../mock/users";
const BASE_URL = "http://capacitao.byronsolutions.com:5000/api"
import { getUsers, addUser } from "../../mock/users";

const cadastrarUsuario = ({ nome, email, senha }) => {
    const novoUsuario = {
      id: String(getUsers().length + 1),
      name: nome,
      email: email,
      password: senha,
      // Adicione outras propriedades do usuário, se necessário
    };
    addUser(novoUsuario);
    return novoUsuario;
  };
  
  export default cadastrarUsuario;