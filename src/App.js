import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementsProvider } from "./utils/functions/context";
import Body from "./pages/body/body";
import { AllProjectsGrid } from "./pages/projects/allProjectsGrid";
import {projectsData} from "./utils/datas";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProjectDetailsPage } from "./pages/projects/projectDetailsPage";

function App() {
  return (
    <Router>
      <ElementsProvider>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path="/all-projects"
            element={<AllProjectsGrid projectList={projectsData} />}
          />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </ElementsProvider>
    </Router>
  );
}

export default App;
