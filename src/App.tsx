import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { ApiContext } from './contexts';
import { APIService } from './services';
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
  const service = new APIService(`${process.env.REACT_APP_API_ENDPOINT}/character`);
  return (
    <ApiContext.Provider value={service}>
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/character" component={Character} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ApiContext.Provider>
  );
}

export default App;
