import { useState } from 'react';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import Field from 'components/Field';
import { LoginRequest } from 'types/api';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currency, setCurrency] = useState('USD');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let request: LoginRequest = {
            username: email,
            password: password,
            currency: currency,
        };
        console.log(request);
    }

    return (
        <div className="Login">
            <div className="Login__container">
                <h1>Inicio de Sesión</h1>
                <div className="Login__form--container">
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
                        <Button type="submit" text='Iniciar Sesión' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;