import * as C from './TableBody.styles'

import { useNavigate, useParams } from 'react-router-dom';

import { API } from '../../../types/API';

type Props = {
    users: API[];
}

const TableBody = ({users}: Props) => {
    const navigate = useNavigate()
    const { id } = useParams()

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
                        onClick={() => navigate(`/edituser`)}>
                            Editar
                        </C.Button>
                    <C.Button variable='excluir'>Excluir</C.Button>
                </C.TdAction>
            </tr>
        ))}
    </tbody>
    );
}

export default TableBody;