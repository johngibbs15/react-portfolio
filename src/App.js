import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import Navbar from './components/navbar/navbar';
import Socials from './components/socials/socials';
import AniaKubow from './components/ania-kubow/ania-kubow';
import CareerFoundry from './components/career-foundry/career-foundry';
import WesBos from './components/wesbos/wesbos';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                    path="/projects/ania-kubow-projects"
                    element={<AniaKubow />}
                />
                <Route
                    path="/projects/career-foundry-projects"
                    element={<CareerFoundry />}
                />
                <Route path="/projects/wes-bos-projects" element={<WesBos />} />
            </Routes>
            <Socials />
        </BrowserRouter>
    );
}

export default App;
