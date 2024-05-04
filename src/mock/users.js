let users = [
    {
      id: "1",
      name: "Pedro Paulo",
      phone: "350000000",
      email: "teste",
      password: "123",
      cep: "37500000",
      imageUrl: "../../../assets/imgs/profile/photo.png",
    },
  ];
  
  export const getUsers = () => {
    return users;
  };
  
  export const addUser = (user) => {
    users.push(user);
  };
  