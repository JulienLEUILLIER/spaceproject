import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DesignSystem from './components/DesignSystem/DesignSystem';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </div>
  );
}

export default App;
