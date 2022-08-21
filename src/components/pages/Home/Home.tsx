import * as C from './Home.styles'

import { Link } from 'react-router-dom';
import TableBody from '../../table/TableBody/TableBody';
import TableHeader from '../../table/TableHeader/TableHeader';
import NewUserButton from '../NewUser/NewUserButton';

import { API } from '../../../types/API';


type Props = {
    users: API[];
}

const Home = ({users}: Props) => {
    return (
        <C.Container>
            <Link to='/newuser'> <NewUserButton /> </Link>

            <C.Content>
                <C.Table>
                    <TableHeader />

                    <TableBody users={users} />
                </C.Table>
            </C.Content>
        </C.Container>
    );
}

export default Home;