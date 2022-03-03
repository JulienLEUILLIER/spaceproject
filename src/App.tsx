import { Route, Routes } from 'react-router-dom';
import Home from './components/RoutesComponents/Home';
import DesignSystem from './components/RoutesComponents/DesignSystem';
import GlobalStyle from './styles/global';
import Destination from './components/RoutesComponents/Destination';
import Crew from './components/RoutesComponents/Crew';
import Technology from './components/RoutesComponents/Technology';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
      </Routes>
    </div>
  );
}

export default App;
