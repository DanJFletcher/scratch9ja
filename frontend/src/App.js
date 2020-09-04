import React from 'react';
import {useRoutes} from 'hookrouter'
import Homepage from './components/pages/Homepage';
import routes from './components/routes/RouteList'

function App() {

  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      
      {routeResult}
    </div>
  );
}

export default App;
