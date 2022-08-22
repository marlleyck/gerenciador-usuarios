import * as C from './EditUser.styles';
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';

import Form from '../../Form/Form';

import { API } from '../../../types/API'
import { useParams } from 'react-router-dom';

type Props = {
    users: API[];
    setUsers: (newState: API[]) => void;
}

const EditUser = ({users, setUsers}: Props) => {
    const { id } = useParams()
    

    return (
        <C.Container>
            <C.Content>
                <C.Header>
                    <C.Title>Editar Usuário</C.Title>
                </C.Header>

                <C.FormContainer>
                    <Form users={users} 
                    setUsers={setUsers} 
                    urlID={Number(id)}
                    />
                </C.FormContainer>
            </C.Content>
        </C.Container>
    );
}

export default EditUser;