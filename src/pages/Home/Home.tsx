import * as C from "./Home.styles";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import TableBody from "../../components/table/TableBody/TableBody";
import TableHeader from "../../components/table/TableHeader/TableHeader";
import NewUserButton from "../NewUser/NewUserButton";

import { UserType } from "../../types/UserType";

type Props = {
  users: UserType[];
  setUsers: (newState: UserType[]) => void;
};

const Home = ({ users, setUsers }: Props) => {
  const { setName, setEmail, setPhone, setCity } = useContext(UserContext);

  const handleClickNewUserButton = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
  };

  return (
    <C.Container>
      <Link to="/newuser" onClick={handleClickNewUserButton}>
        {" "}
        <NewUserButton />{" "}
      </Link>

      <C.Content>
        <C.Table>
          <TableHeader />

          <TableBody users={users} setUsers={setUsers} />
        </C.Table>
      </C.Content>
    </C.Container>
  );
};

export default Home;
