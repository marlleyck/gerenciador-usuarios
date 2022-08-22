import * as C from './Form.styles';
import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'

import {API} from '../../types/API'

type Props = {
    users: API[];
    setUsers: (value: API[]) => void;
    urlID?: number;
}

const Form = ({users, setUsers, urlID}: Props) => {

    const {name, setName, email, setEmail, phone, setPhone, city, setCity} = useContext(UserContext)

    const navigate = useNavigate()
    const { id } = useParams()

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

    const createUser = async () => {
        let newUsers: API[] = [...users]
        
        const user: API = {
            id: users.length + 1,
            name: name,
            email: email,
            phone: phone,
            address: {
                city: city
            }
        }

        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, user)
            console.log(response)

            newUsers = [...users, user]
            setUsers(newUsers)
            clearValues()
            alert('Usuário cadastrado com sucesso!')
            navigate('/')

        } catch(err) {
            console.log(err)
        }
    }

    const editUser = async () => {
        const confirmUser = users.filter((user) => user.id === urlID)
        const confirmResp = confirm(`Deseja realmente editar o usuário: ${confirmUser[0].name}?`)

        if (confirmResp) {
            try {
                
                // const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`)

                let newUsers: API[] = [...users]
    
                const newUser: API = {
                    id: Number(id),
                    name: name,
                    email: email,
                    phone: phone,
                    address: {
                        city: city
                    }
                }
                
                newUsers = newUsers.map((user) => {
                    if (user.id == urlID) {
                        return user = newUser
                    } else {
                        return user;
                    }
                })
                
                

                setUsers(newUsers)
                alert('Usuário modificado com sucesso!')
                navigate('/')
                
            } catch({response}: any) {
                console.log(response)
                users.map((user) => {
                    if (user.id === urlID) {
                        console.log(user.id)
                    }
                })
            }
        }
    }

    const handleUser = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (id === undefined) {
            createUser()
        } else {
            editUser()
        }
    }

    return(
        <C.FormDiv>
            <C.Input id='inpName' type='text' placeholder='Nome do cliente' 
                onChange={(e) => {setName(e.target.value)}}
                value={name} />

            <C.Input id='inpEmail' type='email' placeholder='Email do cliente' 
                onChange={(e) => {setEmail(e.target.value)}}
                value={email} />

            <C.Input id='inpPhone' type='text' placeholder='Número do cliente'
                onChange={(e) => {setPhone(e.target.value)}}
                value={phone} />

            <C.Input id='inpCity' type='text' placeholder='Cidade do cliente'
                onChange={(e) => {setCity(e.target.value)}}
                value={city} />

            <C.Button 
                style={{backgroundColor: 'red'}} 
                onClick={handleBackButton}>
                    Voltar
            </C.Button>
            <C.Button 
                onClick={handleUser}>
                    Adicionar
            </C.Button>
        </C.FormDiv>
    );
}

export default Form;