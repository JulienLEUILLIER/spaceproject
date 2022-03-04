import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DesignSystem from './components/DesignSystem';
import GlobalStyle from './styles/global';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

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
