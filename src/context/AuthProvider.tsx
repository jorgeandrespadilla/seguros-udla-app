import { createContext, useCallback, useEffect, useState } from "react";
import authToken from "utils/authToken";
import { addStorageListener, removeStorageListener, triggerStorageEvent } from "utils/storage";

interface AuthContextData {
    isAuthenticated: boolean;
    login: (authToken: string) => void;
    logout: () => void;
    syncLogout: () => void;
    validateToken: () => void;
}

type AuthProviderProps = {
    children: React.ReactNode;
};

const authEvent = {
    logout: "logout",
};

export const AuthContext = createContext<AuthContextData>({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
    syncLogout: () => { },
    validateToken: () => { },
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return authToken.get() !== null;
    });

    const login = (token: string) => {
        authToken.set(token);
        setIsAuthenticated(true);
    }

    const logout = useCallback(() => {
        if (!isAuthenticated) {
            return;
        }
        authToken.remove();
        setIsAuthenticated(false);
    }, [isAuthenticated]);

    /**
     * Synchronize logout across tabs
     */
    const syncLogout = () => {
        triggerStorageEvent(authEvent.logout, String(Date.now()));
    }

    const validateToken = () => {
        setIsAuthenticated(authToken.get() !== null);
    }

    useEffect(() => {
        const handleLogoutEvent = (event: StorageEvent) => {
            if (event.key === authEvent.logout) {
                logout();
            }
        }

        addStorageListener(handleLogoutEvent);
        return () => {
            removeStorageListener(handleLogoutEvent);
        };
    }, [logout]);

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            login,
            logout,
            syncLogout,
            validateToken,
        }}>
            {children}
        </AuthContext.Provider>
    );
}
