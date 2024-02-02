import "./App.css";
import SideBar from "./pages/sideBar/sideBar";
import { ElementsProvider } from "./utils/functions/context";

import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <ElementsProvider>
      <SideBar />
    </ElementsProvider>
  );
}

export default App;
