import { TableRates } from './components/TableRates';
import { Footer, Header } from './layouts';

function App() {
    // TODO: Add the FE for exchange rates here.

    return (
        <>
            <Header />
            <div className="container mt-5 mb-5">
                <TableRates />
            </div>
            <Footer />
        </>
    );
}

export default App;
