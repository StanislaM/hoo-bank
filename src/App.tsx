import Navbar from './components/Navbar';
import Billing from './sections/Billing';
import Business from './sections/Business';
import Header from './sections/Header';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <Navbar />

            <Header />

            <Business />

            <Billing />
        </div>
    );
};

export default App;
