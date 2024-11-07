import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
function App() {
  const[theme,setTheme] =useState("Dark")
 
  return (
    <ThemeContext.Provider value={{theme ,setTheme}}>
      <div className={`container ${theme}`}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
