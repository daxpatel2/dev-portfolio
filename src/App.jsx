import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Works from './components/Projects/Projects';
import Scroll from './components/ScrollUp/Scroll';
import Archive from './components/Archive/Archive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/archive' element={<Archive />}/>
          <Header />
          <main>
            <Home />
            <Works />
            <About />
            <Contacts />
          </main>
          <Scroll />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
