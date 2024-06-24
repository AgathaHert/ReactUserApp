import React, { useState, useRef } from "react";
import axios from "axios";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";
import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    try {
      const name = inputName.current.value;
      const age = inputAge.current.value;

      if (!name || !age) {
        alert("Name and age are required!");
        return;
      }

      const { data } = await axios.post("http://localhost:3001/usuarios", {
        name,
        age,
      });
      setUsers([...users, data]);
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  }

  async function deleteUser(userId) {
    try {
      await axios.delete(`http://localhost:3001/usuarios/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  }

  return (
    <Container>
      <Image alt="logo-img" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>
        <Button onClick={addNewUser}>
          {" "}
          Cadastrar <img alt="icon-arrow" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default App;
