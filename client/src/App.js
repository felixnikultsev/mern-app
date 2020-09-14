import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useRoutes from './routes';
import AuthContext from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import 'materialize-css';

function App() {
    const { userId, token, login, logout, ready } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    if (!ready) {
        return <Loader />;
    }

    return (
        <AuthContext.Provider
            value={{
                userId,
                token,
                login,
                logout,
                isAuthenticated,
            }}>
            <Router>
                {isAuthenticated && <Navbar />}
                <div className="container">{routes}</div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
