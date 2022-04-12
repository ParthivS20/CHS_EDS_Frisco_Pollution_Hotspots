import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import SamplePage from "./pages/SamplePage";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className={"content"}>
        <NavBar />
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route
            path="*"
            element={<SamplePage title={"404"}>404 Page Not Found</SamplePage>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
