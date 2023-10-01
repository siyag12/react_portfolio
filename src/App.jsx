import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

export const App = () => {
    return (
        <div style={{
            width: "100%",
        }}>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
