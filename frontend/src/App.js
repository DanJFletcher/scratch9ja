import React from 'react';
import {useRoutes} from 'hookrouter'
import routes from './components/routes/RouteList'
//import HeaderViewContextProvider from './contexts/HeaderViewContext';

function App() {

  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      
      {/* <HeaderViewContextProvider> */}
        {routeResult}
      {/* </HeaderViewContextProvider> */}
      

    </div>
  );
}

export default App;
