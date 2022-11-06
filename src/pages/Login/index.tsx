import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import Field from 'components/Field';
import { LoginRequest } from 'types/request';
import { useAuth } from 'hooks/useAuth';
import { authenticateUser } from 'services/auth';
import { handleAPIError } from 'utils/validation';
import leftShape from 'assets/LeftShape.svg';
import topShape from 'assets/TopShape.svg';
import bottomShape from 'assets/BottomShape.svg';
import './Login.css';

function Login() {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currency, setCurrency] = useState('USD');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const targetPath = location.state ? location.state.pathname : "/";
            let request: LoginRequest = {
                username: email,
                password: password,
                currency: currency,
            };
            const response = await authenticateUser(request);
            login(response);
            navigate(targetPath, { replace: true });
        } catch (error) {
            handleAPIError(error);
        }
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="Login__container">
            <img src={leftShape} className="Login__leftShape" alt="Shape" aria-hidden='true' />
            <img src={topShape} className="Login__topShape" alt="Shape" aria-hidden='true' />
            <img src={bottomShape} className="Login__bottomShape" alt="Shape" aria-hidden='true' />
            <h1>Inicio de Sesión</h1>
            <form onSubmit={handleSubmit} className="Login__form">
                <Field
                    type='email'
                    label='Usuario'
                    placeholder='usuario@ejemplo.com'
                    value={email}
                    onChange={setEmail}
                    required
                />
                <Field
                    type='password'
                    label='Contraseña'
                    placeholder='Ingrese su contraseña'
                    value={password}
                    onChange={setPassword}
                    minLength={6}
                    required
                />
                <Dropdown label='Moneda' value={currency} onChange={setCurrency}>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='RMB'>RMB</option>
                </Dropdown>
                <div className="Login__actions">
                    <Button type="submit" text='Iniciar Sesión' />
                </div>
            </form>
        </div>
    );
}

export default Login;