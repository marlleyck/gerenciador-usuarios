import * as C from './NewUser.styles'

import Form from '../../Form/Form';

import { API } from '../../../types/API';

type Props = {
    users: API[];
    setUsers: (value: API[]) => void;
}

const NewUser = ({users, setUsers}: Props) => {
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
}

export default NewUser;