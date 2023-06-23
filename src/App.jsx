import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Works from './components/Projects/Projects';
import Scroll from './components/ScrollUp/Scroll';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Works />
        {/* <Experience /> */}
        <About />
        <Contacts />
      </main>
      <Scroll />
    </>
  )
}

export default App;
