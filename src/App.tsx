import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DesignSystem from './components/DesignSystem/DesignSystem';
import GlobalStyle from './styles/global';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import Global from './components/Global/Global';
import backgrounds from './helpers/getBackgrounds';

function App() {

  return (
    <div className="bg-dark">
      <GlobalStyle />
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route
          path="/destination"
          element={<Global backgrounds={backgrounds.destination} routeComponent={<Destination />}
        />} />
        <Route
          path="/crew"
          element={<Global backgrounds={backgrounds.crew} routeComponent={<Crew />} 
        />} />
        <Route
          path="/technology"
          element={<Global backgrounds={backgrounds.technology} routeComponent={<Technology />} 
        />} />
        <Route
          path="/"
          element={<Global backgrounds={backgrounds.home} routeComponent={<Home />} 
        />} />
      </Routes>
    </div>
  );
}

export default App;
