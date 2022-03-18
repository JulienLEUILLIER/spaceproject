import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import DesignSystem from './components/DesignSystem/DesignSystem';
import backgrounds from './helpers/getBackgrounds';
import App from './App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<App backgrounds={backgrounds.home} />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route
        path="/destination"
        element={<Destination backgrounds={backgrounds.destination} />} />
      <Route
        path="/crew"
        element={<Crew backgrounds={backgrounds.destination} />} />
      <Route
        path="/technology"
        element={<Technology backgrounds={backgrounds.destination} />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);