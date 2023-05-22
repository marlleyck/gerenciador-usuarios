import * as C from "./NewUser.styles";

import Form from "../../components/Form/Form";

import { UserType } from "../../types/UserType";

type Props = {
  users: UserType[];
  setUsers: (newState: UserType[]) => void;
};

const NewUser = ({ users, setUsers }: Props) => {
  return (
    <C.Container>
      <C.Content>
        <C.Header>
          <C.Title>Novo Usuário</C.Title>
        </C.Header>

        <C.FormContainer>
          <Form users={users} setUsers={setUsers} />
        </C.FormContainer>
      </C.Content>
    </C.Container>
  );
};

export default NewUser;
