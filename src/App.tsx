import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Character from './pages/Character';


const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const App: React.FC = (): React.ReactElement<void> => {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character" component={Character} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
