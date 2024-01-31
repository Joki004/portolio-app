import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landingPage';
import { ElementsColorProvider } from './utils/functions/context';

function App() {
  return (
    <ElementsColorProvider>
    <LandingPage />
    </ElementsColorProvider>
  );
}

export default App;
