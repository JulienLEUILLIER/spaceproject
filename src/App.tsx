import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DesignSystem from './components/DesignSystem/DesignSystem';
import GlobalStyle from './styles/global';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Global from './components/Global/Global';

function App() {
  return (
    <div className="bg-dark">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Global content={<Home/>} />} />
        <Route path="/design-system" element={<DesignSystem/>} />
        <Route path="/destination" element={<Global content={<Destination/>} />}/>
        <Route path="/crew" element={<Global content={<Crew/>} />}/>
        <Route path="/technology" element={<Global content={<Technology/>} />}/>
      </Routes>
    </div>
  );
}

export default App;
