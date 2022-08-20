import * as C from './Home.styles'

import Header from '../layout/Header/Header';
import TableBody from '../table/TableBody/TableBody';
import TableHeader from '../table/TableHeader/TableHeader';

const Home = () => {
    return (
        <C.Container>
            <Header />

            <C.Content>
                <table>
                    <TableHeader />

                    <TableBody />
                </table>
            </C.Content>
        </C.Container>
    );
}

export default Home;