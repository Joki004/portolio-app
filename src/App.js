import logo from './logo.svg';
import './App.css';
import SideBar from './pages/sideBar';
import { ElementsColorProvider } from './utils/functions/context';
import 'boxicons';
function App() {
  return (
    <ElementsColorProvider>
    <SideBar />
    </ElementsColorProvider>
  );
}

export default App;
