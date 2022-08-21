import * as C from './Home.styles'

import TableBody from '../../table/TableBody/TableBody';
import TableHeader from '../../table/TableHeader/TableHeader';
import NewUserButton from '../NewUser/NewUserButton';

const Home = ({Link}: any) => {
    return (
        <C.Container>
            <Link to='/newuser'> <NewUserButton /> </Link>

            <C.Content>
                <C.Table>
                    <TableHeader />

                    <TableBody />
                </C.Table>
            </C.Content>
        </C.Container>
    );
}

export default Home;