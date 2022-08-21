import * as C from './NewUser.styles'

import Form from '../../Form/Form';

const NewUser = () => {
    return (
        <C.Container>
            <C.Content>
                <C.Header>
                    <C.Title>Novo Usuário</C.Title>
                </C.Header>

                <C.FormContainer>
                    <Form button='Voltar' />
                </C.FormContainer>
            </C.Content>
        </C.Container>
    );
}

export default NewUser;