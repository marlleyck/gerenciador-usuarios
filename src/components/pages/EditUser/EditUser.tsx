import * as C from './EditUser.styles';

import Form from '../../Form/Form';

const EditUser = () => {
    return (
        <C.Container>
            <C.Content>
                <C.Header>
                    <C.Title>Editar Usuário</C.Title>
                </C.Header>

                <C.FormContainer>
                    <Form button='Voltar' />
                </C.FormContainer>
            </C.Content>
        </C.Container>
    );
}

export default EditUser;