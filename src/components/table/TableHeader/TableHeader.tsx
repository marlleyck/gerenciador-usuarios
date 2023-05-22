import * as C from "./TableHeader.styles";

const TableHeader = () => {
  return (
    <thead>
      <C.Tr>
        <C.Td>Nome</C.Td>
        <C.Td>Email</C.Td>
        <C.Td>Número</C.Td>
        <C.Td>Cidade</C.Td>
        <C.Td variable="acao">Ação</C.Td>
      </C.Tr>
    </thead>
  );
};

export default TableHeader;
