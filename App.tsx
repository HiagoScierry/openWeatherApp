import React from 'react';
import Routes from './src/Routes';
import {WeatherProvider} from './src/Context'
const App: React.FC = () => {
  return(
    <WeatherProvider>
      <Routes/>
    </WeatherProvider>
  );
};

export default App;
