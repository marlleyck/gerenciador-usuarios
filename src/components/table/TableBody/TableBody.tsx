import * as C from './TableBody.styles'

const TableBody = () => {
    return (
        <C.TBody>
            <C.Tr>
                <C.Td>TESTE</C.Td>
                <C.Td>TESTE</C.Td>
                <C.Td>TESTE</C.Td>
                <C.Td>TESTE</C.Td>
                <C.TdAction>
                    <C.Button variable='editar'>Editar</C.Button>
                    <C.Button variable='excluir'>Excluir</C.Button>
                </C.TdAction>
            </C.Tr>
        </C.TBody>
    );
}

export default TableBody;