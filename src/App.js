import {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ContactFormSuccess from "./pages/ContactFormSuccess";
import SamplePage from "./pages/SamplePage";
import {loginUser, logoutUser} from "./lib/identityActions";

import "./App.css";
import ContactFormError from "./pages/ContactFormError";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userCookie = localStorage.getItem("currentOpenSaucedUser");

    if (userCookie) {
      setUser(JSON.parse(userCookie))
    } else {
      loginUser();
    }

    netlifyIdentity.on("login", () => {
      loginUser()
      setUser(JSON.parse(localStorage.getItem("currentOpenSaucedUser")));
    });

    netlifyIdentity.on("logout", () => {
      setUser(null)
      logoutUser()
    });
  }, [])

  return (
    <Router>
      <div className={"content"}>
        <NavBar user={user}/>
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/contact"} element={<Contact userEmail={user ? user.email : ''}/>} />
          <Route path={"/contact-form-success"} element={<ContactFormSuccess />} />
          <Route path={"/contact-form-error"} element={<ContactFormError />} />
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
