import React from 'react';
import {useRoutes, A} from 'hookrouter'
import Homepage from './components/pages/Homepage';
import routes from './components/routes/RouteList'

function App() {

  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      
      <Homepage />

      {routeResult}
    </div>
  );
}

export default App;
