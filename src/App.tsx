import Navbar from './components/Navbar';
import Business from './sections/Business';
import Header from './sections/Header';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <Navbar />

            <Header />

            <Business />
        </div>
    );
};

export default App;
