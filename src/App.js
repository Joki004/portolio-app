import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import { ElementsProvider } from "./utils/functions/context";
import Body from "./pages/body/body";

import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <ElementsProvider>
        <Body />
      </ElementsProvider>
    </Router>
  );
}

export default App;
