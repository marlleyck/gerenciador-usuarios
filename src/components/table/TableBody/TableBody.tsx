import * as C from './TableBody.styles'

import { useNavigate, useParams } from 'react-router-dom';

import { API } from '../../../types/API';
import axios from 'axios'

type Props = {
    users: API[];
    setUsers: (value: API[]) => void;
}

const TableBody = ({users, setUsers}: Props) => {
    const navigate = useNavigate()
    const { id } = useParams()

    const handleEditUser = (userID: number) => {
        navigate(`/edituser/${userID}`)
    }

    const confirmDelete = (userId: number): boolean => {
        const user = users.filter((usu) => usu.id === userId)
        const resp = confirm(`Deseja realmente excluir o usuário: ${user[0].name}?`)
        return resp;
    }

    const handleDeleteUser = async (userID: number) => {
        if (confirmDelete(userID)) {
            try {
                const response = 
                await axios.delete(`https://jsonplaceholder.typicode.com/users/${String(userID)}`)
                
                const newUsers = users.filter((user) => user.id !== userID)
                setUsers(newUsers)
                alert('Usuário deletado com sucesso!')
            } catch(err) {
                console.log(err)
            }
        }
    }

return (
    <tbody>
        {users.map((user) => (
            <tr key={user.id} id={String(user.id)}>
                <C.Td>{user.name}</C.Td>
                <C.Td>{user.email}</C.Td>
                <C.Td>{user.phone}</C.Td>
                <C.Td>{user.address.city}</C.Td>
                <C.TdAction>
                    <C.Button 
                        variable='editar'
                        onClick={() => {handleEditUser(user.id)}}>
                            Editar
                        </C.Button>
                    <C.Button 
                        variable='excluir'
                        onClick={() => handleDeleteUser(user.id)}>
                            Excluir
                    </C.Button>
                </C.TdAction>
            </tr>
        ))}
    </tbody>
    );
}

export default TableBody;