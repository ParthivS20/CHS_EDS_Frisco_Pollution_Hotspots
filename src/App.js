import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import SamplePage from "./pages/SamplePage";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
      <Router>
          <NavBar />
          <Routes>
              <Route path={'/'} exact element={<Home />} />
              <Route path='*' element={<SamplePage title={"404"}>404 Page Not Found</SamplePage>} />
          </Routes>
      </Router>
  );
}

export default App;
