import * as C from './NewUser.styles'

import Form from '../../Form/Form';

const NewUser = () => {
    return (
        <C.Container>
            <C.Content>
                <C.Header>
                    <C.Title>New User</C.Title>
                </C.Header>

                <C.FormContainer>
                    <Form />
                </C.FormContainer>
            </C.Content>
        </C.Container>
    );
}

export default NewUser;