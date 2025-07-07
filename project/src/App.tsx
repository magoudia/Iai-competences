import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Training from './pages/Training';
import Team from './pages/Team';
import Contact from './pages/Contact';
import News from './pages/News';
import InscriptionFormation from './pages/InscriptionFormation';
import FormationDetail from './pages/FormationDetail';
import Devis from './pages/Devis';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/formations" element={<Training />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inscription-formation" element={<InscriptionFormation />} />
            <Route path="/formation/:slug" element={<FormationDetail />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;