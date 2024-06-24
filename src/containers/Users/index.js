import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '../../assets/users.svg';
import Arrow from '../../assets/arrow.svg';
import Trach from '../../assets/trash.svg';
import { Container, Image, ContainerItems, H1, Button, User } from './styles'


const Users = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchUsers(){
      const { data } = await axios.get("http://localhost:3001/usuarios")
      setUsers(data);
    }

    fetchUsers()

  },[])

  async function deleteUser(userId) {
      try {
          await axios.delete(`http://localhost:3001/usuarios/${userId}`);
          setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
          console.error("There was an error deleting the user!", error);
      }
  }

  function goBackPage(){
    navigate(-1);
  }

  
  return (
    <Container>
      <Image alt="logo-img" src={Avatar} />
      <ContainerItems>
        <H1>Usuários</H1>
        <ul>
          { users.map( (user) =>(
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt="trash" src={Trach}/></button>
            </User>
          ))
          }
        </ul>

        <Button onClick={goBackPage}> <img alt="icon-arrow" src={Arrow} /> Voltar </Button>
      </ContainerItems>

    </Container>
  )

}

export default Users