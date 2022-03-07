import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DesignSystem from './components/DesignSystem/DesignSystem';
import GlobalStyle from './styles/global';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import Global from './components/Global/Global';

function App() {
  return (
    <div className="bg-dark">
      <GlobalStyle />
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route
          path="/destination"
          element={<Global
            routeComponent={<Destination />}
            //backgroundImage={desktopImages.destination} 
            />} />
        <Route
          path="/crew"
          element={<Global
            routeComponent={<Crew />}
            // backgroundImage={desktopImages.crew}
          />} />
        <Route
          path="/technology"
          element={<Global
            routeComponent={<Technology />}
            // backgroundImage={desktopImages.technology}
          />} />
        <Route
          path="/"
          element={<Global
            routeComponent={<Home />}
            // backgroundImage={desktopImages.home} 
            />}
        />
      </Routes>
    </div>
  );
}

export default App;
