import * as C from './Form.styles';
import * as React from 'react';

import { FormEvent, MouseEventHandler, SyntheticEvent, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import {API} from '../../types/API'

type Props = {
    users: API[];
    setUsers: (value: API[]) => void;
}

const Form = ({users, setUsers}: Props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')

    const navigate = useNavigate()

    const clearValues = () => {
        setName('')
        setEmail('')
        setPhone('')
        setCity('')
    }

    const handleBackButton = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        navigate('/')
    }

    const handleCreateUser = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        let newUsers = [...users]

        const response = await axios.post(`https://jsonplaceholder.typicode.com/users`,
        {
            id: 12345,
            name: name,
            email: email,
            phone: phone,
            address: {
                city: city
            }
        })

        console.log(response)

        newUsers = [...users, {
            id: 12345,
            name: name,
            email: email,
            phone: phone,
            address: {
                city: city
            }
        }]
        setUsers(newUsers)
        clearValues()
    }

    return(
        <C.FormDiv>
            <C.Input type='text' placeholder='Nome do cliente' 
                onChange={(e) => {setName(e.target.value)}}
                value={name} />
            <C.Input type='email' placeholder='Email do cliente' 
                onChange={(e) => {setEmail(e.target.value)}}
                value={email} />
            <C.Input type='text' placeholder='Número do cliente'
                onChange={(e) => {setPhone(e.target.value)}}
                value={phone} />
            <C.Input type='text' placeholder='Cidade do cliente'
                onChange={(e) => {setCity(e.target.value)}}
                value={city} />

            <C.Button 
                style={{backgroundColor: 'red'}} 
                onClick={handleBackButton}>
                    Voltar
            </C.Button>
            <C.Button 
                onClick={handleCreateUser}>
                    Adicionar
            </C.Button>
        </C.FormDiv>
    );
}

export default Form;