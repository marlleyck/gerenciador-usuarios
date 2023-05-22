import * as C from "./EditUser.styles";

import Form from "../../components/Form/Form";

import { UserType } from "../../types/UserType";
import { useParams } from "react-router-dom";

type Props = {
  users: UserType[];
  setUsers: (newState: UserType[]) => void;
};

const EditUser = ({ users, setUsers }: Props) => {
  const { id } = useParams();

  return (
    <C.Container>
      <C.Content>
        <C.Header>
          <C.Title>Editar Usuário</C.Title>
        </C.Header>

        <C.FormContainer>
          <Form users={users} setUsers={setUsers} urlID={Number(id)} />
        </C.FormContainer>
      </C.Content>
    </C.Container>
  );
};

export default EditUser;
