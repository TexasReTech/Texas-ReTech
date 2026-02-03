import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FAQChatbot from './components/FAQChatbot/FAQChatbot';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Industries from './pages/Industries/Industries';
import Contact from './pages/Contact/Contact';
import ServiceAreas from './pages/ServiceAreas/ServiceAreas';
import AcceptedMaterials from './pages/AcceptedMaterials/AcceptedMaterials';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quote" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/accepted-materials" element={<AcceptedMaterials />} />
        </Routes>
        <Footer />
        <FAQChatbot />
      </div>
    </Router>
  );
}

export default App;
