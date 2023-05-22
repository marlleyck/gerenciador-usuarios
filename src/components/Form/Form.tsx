import * as C from "./Form.styles";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { UserType } from "../../types/UserType";

type Props = {
  users: UserType[];
  setUsers: (value: UserType[]) => void;
  urlID?: number;
};

const Form = ({ users, setUsers, urlID }: Props) => {
  const { name, setName, email, setEmail, phone, setPhone, city, setCity } =
    useContext(UserContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const clearValues = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
  };

  const handleBackButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate("/");
  };

  const createUser = async () => {
    let newUsers: UserType[] = [...users];

    const user: UserType = {
      id: users.length + 1,
      name,
      email,
      phone,
      address: {
        city,
      },
    };

    try {
      await api.post(`/users`, user);

      newUsers = [...users, user];
      setUsers(newUsers);
      clearValues();

      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (err) {
      alert("Não foi possível criar o usuário!");
      console.log(err);
    }
  };

  const editUser = async () => {
    const confirmUser = users.filter((user) => user.id === urlID);
    const confirmResp = confirm(
      `Deseja realmente editar o usuário: ${confirmUser[0].name}?`
    );

    if (confirmResp) {
      try {
        let newUsers: UserType[] = [...users];

        const newUser: UserType = {
          id: Number(id),
          name,
          email,
          phone,
          address: {
            city,
          },
        };

        newUsers = newUsers.map((user) => {
          if (user.id == urlID) {
            return (user = newUser);
          } else {
            return user;
          }
        });

        console.log(newUsers);

        await api.patch(`/users/${id}`, newUser);

        setUsers(newUsers);
        alert("Usuário modificado com sucesso!");
        navigate("/");
      } catch (err) {
        alert("Não foi possível modificar o usuário!");
        console.log(err);
      }
    }
  };

  const handleUser = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (id === undefined) {
      createUser();
    } else {
      editUser();
    }
  };

  return (
    <C.FormDiv>
      <C.Input
        id="inpName"
        type="text"
        placeholder="Nome do cliente"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />

      <C.Input
        id="inpEmail"
        type="email"
        placeholder="Email do cliente"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />

      <C.Input
        id="inpPhone"
        type="text"
        placeholder="Número do cliente"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        value={phone}
      />

      <C.Input
        id="inpCity"
        type="text"
        placeholder="Cidade do cliente"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        value={city}
      />

      <C.Button style={{ backgroundColor: "red" }} onClick={handleBackButton}>
        Voltar
      </C.Button>
      <C.Button onClick={handleUser}>Adicionar</C.Button>
    </C.FormDiv>
  );
};

export default Form;
