import * as C from "./TableBody.styles";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../../contexts/UserContext";
import { UserType } from "../../../types/UserType";
import { api } from "../../../services/api";

type Props = {
  users: UserType[];
  setUsers: (newState: UserType[]) => void;
};

const TableBody = ({ users, setUsers }: Props) => {
  const navigate = useNavigate();

  const { setName, setEmail, setPhone, setCity } = useContext(UserContext);

  const handleEditUser = (userID: number) => {
    navigate(`/edituser/${userID}`);

    users.map((user) => {
      if (user.id === userID) {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setCity(user.address.city);
      }
    });
  };

  const confirmDelete = (userId: number): boolean => {
    const user = users.filter((user) => user.id === userId);
    const resp = confirm(
      `Deseja realmente excluir o usuário: ${user[0].name}?`
    );
    return resp;
  };

  const handleDeleteUser = async (userID: number) => {
    if (confirmDelete(userID)) {
      try {
        await api.delete(`/users/${String(userID)}`);

        const newUsers = users.filter((user) => user.id !== userID);
        setUsers(newUsers);
        alert("Usuário deletado com sucesso!");
      } catch (err) {
        alert("Não foi possível remover o usuário!");
        console.log(err);
      }
    }
  };

  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id} id={String(user.id)}>
          <C.Td>{user.name}</C.Td>
          <C.Td>{user.email}</C.Td>
          <C.Td>{user.phone}</C.Td>
          <C.Td>{user.address.city}</C.Td>
          <C.TdAction>
            <C.Button
              variable="editar"
              onClick={() => {
                handleEditUser(user.id);
              }}
            >
              Editar
            </C.Button>
            <C.Button
              variable="excluir"
              onClick={() => handleDeleteUser(user.id)}
            >
              Excluir
            </C.Button>
          </C.TdAction>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
