import * as C from './Form.styles';
import * as React from 'react';

import { FormEvent, MouseEventHandler, SyntheticEvent, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import {API} from '../../types/API'

type Props = {
    users: API[];
    setUsers: (value: API[]) => void;
    urlID: number;
}

const Form = ({users, setUsers, urlID}: Props) => {
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
        
        const user = {
            id: 12345,
            name: name,
            email: email,
            phone: phone,
            address: {
                city: city
            }
        }

        const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, user)

        console.log(users)

        newUsers = [...users, user]
        setUsers(newUsers)
        clearValues()
    }

    const handleNameId = (): string => {
        if (urlID != undefined) {
            const user = users.filter((user) => user.id === urlID)
            return user[0].name;
        } else {
            return name;
        }
    }

    const handleEmailId = (): string => {
        if (urlID != undefined) {
            const user = users.filter((user) => user.id === urlID)
            return user[0].email;
        } else {
            return email;
        }
    }

    const handlePhoneId = (): string => {
        if (urlID != undefined) {
            const user = users.filter((user) => user.id === urlID)
            return user[0].phone;
        } else {
            return phone;
        }
    }

    const handleCityId = (): string => {
        if (urlID != undefined) {
            const user = users.filter((user) => user.id === urlID)
            return user[0].address.city;
        } else {
            return city;
        }
    }

    return(
        <C.FormDiv>
            <C.Input type='text' placeholder='Nome do cliente' 
                onChange={(e) => {setName(e.target.value)}}
                value={handleNameId()} />

            <C.Input type='email' placeholder='Email do cliente' 
                onChange={(e) => {setEmail(e.target.value)}}
                value={handleEmailId()} />

            <C.Input type='text' placeholder='Número do cliente'
                onChange={(e) => {setPhone(e.target.value)}}
                value={handlePhoneId()} />

            <C.Input type='text' placeholder='Cidade do cliente'
                onChange={(e) => {setCity(e.target.value)}}
                value={handleCityId()} />

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