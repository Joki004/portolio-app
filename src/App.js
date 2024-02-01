import logo from "./logo.svg";
import "./App.css";
import SideBar from "./pages/sideBar";
import {
  ElementsColorProvider,
  useElementsColor,
} from "./utils/functions/context";

import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  return (
    <ElementsColorProvider>
  
        <SideBar />
      
    </ElementsColorProvider>
  );
}

export default App;
