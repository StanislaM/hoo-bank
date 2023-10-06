import Container from './components/Container';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <Container>
                <Navbar />
            </Container>
        </div>
    );
};

export default App;
