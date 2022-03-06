import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DesignSystem from './components/DesignSystem/DesignSystem';
import GlobalStyle from './styles/global';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Global from './components/Global/Global';
import HomeBackground from './components/Home/background-home-desktop.jpg';

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
            backgroundImage='assets/destination/background-destination-desktop.jpg' />} />
        <Route
          path="/crew"
          element={<Global
            routeComponent={<Crew />}
            backgroundImage='assets/crew/background-crew-desktop.jpg'
          />} />
        <Route
          path="/technology"
          element={<Global
            routeComponent={<Technology />}
            backgroundImage='assets/technology/background-technology-desktop.jpg'
          />} />
        <Route
          path="/"
          element={<Global
            routeComponent={<Home />}
            backgroundImage={HomeBackground} />}
        />
      </Routes>
    </div>
  );
}

export default App;
