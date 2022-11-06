import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Router from 'routes';
import { getStorageUpdate, listenForStorageUpdates } from 'utils/storage';
import './App.css';

function App() {
    const { validateToken } = useAuth();

    useEffect(() => {
        const onUpdateCompleted = () => {
            validateToken();
        };
        const removeListener = listenForStorageUpdates(onUpdateCompleted);
        getStorageUpdate();
        return () => {
            removeListener();
        };
    }, [validateToken]);

    return (
        <>
            <Router />
            <Toaster position="top-center" toastOptions={{
                duration: 3000,
            }} />
        </>
    );
}

export default App;
