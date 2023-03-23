import React from "react";
import { Router, Link } from "@reach/router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Home from "./pages/Home";

const App = () => {
    return (
        <Router>
            <Home path="/" />
            <Help path="/help" />
            <About path="/about" />
            <Contact path="contact" />
        </Router>
    );
};

export default App;
