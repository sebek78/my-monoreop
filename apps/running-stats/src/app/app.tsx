import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthorization } from '../hooks/useAuthorization';

const StyledApp = styled.div`
    // Your style here
`;

export function App() {
    const { data, isLoading, error, handleLogin, handleLogout } =
        useAuthorization();

    return (
        <StyledApp>
            <div
                onClick={() => (window.location.href = 'http://localhost:4200')}
            >
                Running Stats
            </div>
            <div>
                {!data && (
                    <button type="button" onClick={handleLogin}>
                        Login
                    </button>
                )}
                {data?.athlete && (
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </StyledApp>
    );
}

export default App;
