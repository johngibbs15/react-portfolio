import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import Navbar from './components/navbar/navbar';
import Socials from './components/socials/socials';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Socials />
        </BrowserRouter>
    );
}

export default App;
