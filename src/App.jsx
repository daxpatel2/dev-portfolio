import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/footer';
import Works from './components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Works />
        <About />
        <Contacts />
      </main>

    </>
  )
}

export default App;
