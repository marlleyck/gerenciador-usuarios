import * as C from './Form.styles';

const Form = () => {
    return(
        <C.FormDiv>
            <C.Input type='text' />
            <C.Input type='email' />
            <C.Input type='text' />
            <C.Input type='text' />
        </C.FormDiv>
    );
}

export default Form;