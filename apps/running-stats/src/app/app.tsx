import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const StyledApp = styled.div`
    // Your style here
`;

export function App() {
    console.log(process.env['NX_RS_CLIENT_ID']);
    return <StyledApp>Running Stats</StyledApp>;
}

export default App;
