import Button from 'components/Button';
import { useAuth } from 'hooks/useAuth';
import './Home.css';

function Home() {
    const { logout, syncLogout } = useAuth();

    function handleLogout() {
        logout();
        syncLogout();
    }

    return (
        <div>
            <h1>Inicio</h1>
            <Button text="Cerrar Sesión" onClick={handleLogout} />
        </div>
    );
}

export default Home;