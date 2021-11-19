import './App.css';
//import NavSection from "./components/navSection";
//import Cardliste from "./components/cardliste";
import Home from "./components/home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/footer";
import NavMaster from "./components/navMaster";
import Contact from "./components/Contact";
import About from "./components/about";
import Notfound from "./components/notfound/notfound";



function App() {

    return (
        <div className="App">
            <Router>
                <NavMaster/>
                <Routes>
                        <Route exact path="/portfolio" element={<Home/>} />
                        <Route exact path="/contacts" element={<Contact/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route path="*" element={<Notfound/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
  );
}

export default App;
