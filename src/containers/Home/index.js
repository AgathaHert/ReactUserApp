import React, {useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';
import { Container, Image, ContainerItems, H1, InputLabel, Input, Button } from './styles'


const Home = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  async function addNewUser() {
      try {
          const name = inputName.current.value;
          const age = inputAge.current.value;

          if (!name || !age) {
              alert("Name and age are required!");
              return;
          }

          const { data } = await axios.post("http://localhost:3001/usuarios", { name, age });
          setUsers([...users, data]);
          
          navigate('/usuarios');
          
      } catch (error) {
          console.error("There was an error creating the user!", error);
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
        <Button onClick={addNewUser}> Cadastrar <img alt="icon-arrow" src={Arrow} /></Button>
      </ContainerItems>

    </Container>
  )

}

export default Home;