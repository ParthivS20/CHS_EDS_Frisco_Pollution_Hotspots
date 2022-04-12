import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import SamplePage from "./pages/Sample Page";
import './App.css';

function App() {
  return (
      <Router>
          <NavBar />
          <Routes>
              <Route path={'/'} exact element={<SamplePage>Home</SamplePage>} />
              <Route path='*' element={<SamplePage title={"404"}>404 Page Not Found</SamplePage>} />
          </Routes>
      </Router>
  );
}

export default App;
