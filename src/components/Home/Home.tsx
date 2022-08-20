import * as C from './Home.styles'

import Header from '../layout/Header/Header';
import TableBody from '../table/TableBody/TableBody';
import TableHeader from '../table/TableHeader/TableHeader';

const Home = () => {
    return (
        <C.Container>
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