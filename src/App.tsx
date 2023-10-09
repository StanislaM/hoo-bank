import Clients from './components/Clients';
import Navbar from './components/Navbar';
import Billing from './sections/Billing';
import Business from './sections/Business';
import CardDeal from './sections/CardDeal';
import Feedback from './sections/Feadback';
import Header from './sections/Header';
import LetsTry from './sections/LetsTry';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <Navbar />

            <Header />

            <Business />

            <Billing />

            <CardDeal />

            <Feedback />

            <Clients />

            <LetsTry />
        </div>
    );
};

export default App;
