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
        <div className='Home__container'>
            <h1>Inicio</h1>
            <div className='Home__actions'>
                <Button styleType='secondary' text="Cerrar Sesión" onClick={handleLogout} />
            </div>
        </div>
    );
}

export default Home;