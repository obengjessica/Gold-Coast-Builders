import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/ui/Navbar";
import Home from './components/ui/Home';
import About from './components/ui/About';
import Services from './components/ui/Services';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';

export default function App() {
  return (
    <Router basename="/Gold-Coast-Builders/">
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment when ready */}
          <Route path="/about" element={<About /> } />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}