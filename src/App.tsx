import { BackgroundsProps } from './helpers/getBackgrounds';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Wrapper from './styles/Global.styles'

interface AppProps {
  backgrounds: BackgroundsProps;
}

function App({ backgrounds }: AppProps) {

  return (
    <div className="bg-dark">
      <Wrapper backgrounds={backgrounds}>
        <Header />
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
