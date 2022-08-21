import * as C from './Form.styles';

import {useNavigate} from 'react-router-dom'

type Props = {
    button: string;
}

const Form = ({button}: Props) => {
    const navigate = useNavigate()

    return(
        <C.FormDiv>
            <C.Input type='text' placeholder='Nome do cliente' />
            <C.Input type='email' placeholder='Email do cliente' />
            <C.Input type='text' placeholder='Número do cliente' />
            <C.Input type='text' placeholder='Cidade do cliente' />

            <C.Button 
                style={{backgroundColor: 'red'}}
                onClick={() => navigate('/')}>
                    {button}
            </C.Button>
            <C.Button >Adicionar</C.Button>
        </C.FormDiv>
    );
}

export default Form;