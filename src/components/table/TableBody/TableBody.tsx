import * as C from './TableBody.styles'

const TableBody = () => {
    return (
        <C.TBody>
            <C.Tr>
                <C.Td>MARLLEYCK NATHAN FERNANDES MARTINS SARAIVA</C.Td>
                <C.Td>marlleyck@hotmail.com</C.Td>
                <C.Td>123456789</C.Td>
                <C.Td>Caraúbas</C.Td>
                <C.TdAction>
                    <C.Button variable='editar'>Editar</C.Button>
                    <C.Button variable='excluir'>Excluir</C.Button>
                </C.TdAction>
            </C.Tr>
        </C.TBody>
    );
}

export default TableBody;