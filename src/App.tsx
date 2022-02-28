import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DesignSystem from './components/DesignSystem';
import GlobalStyle from './global';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
