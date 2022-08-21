import * as C from './Home.styles'

import { Link } from 'react-router-dom';
import TableBody from '../../table/TableBody/TableBody';
import TableHeader from '../../table/TableHeader/TableHeader';
import NewUserButton from '../NewUser/NewUserButton';

import { API } from '../../../types/API';


type Props = {
    users: API[];
    setUsers: (value: API[]) => void;
}

const Home = ({users, setUsers}: Props) => {
    return (
        <C.Container>
            <Link to='/newuser'> <NewUserButton /> </Link>

            <C.Content>
                <C.Table>
                    <TableHeader />

                    <TableBody users={users} setUsers={setUsers} />
                </C.Table>
            </C.Content>
        </C.Container>
    );
}

export default Home;