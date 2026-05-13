import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import BrandStory from './components/BrandStory';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Gallery from './components/Gallery';
import AdminGallery from './components/AdminGallery';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <Experiences />
      <BrandStory />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="relative min-h-screen bg-brand-midnight selection:bg-brand-gold selection:text-brand-midnight bg-gradient-moving">
          {/* Animated Noise Overlay */}
          <div className="grain" />
          
          {/* Scroll Progress Bar */}
          <div className="scroll-progress" />
          
          <CustomCursor />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/secure/gallery/img_vid" element={<AdminGallery />} />
          </Routes>
          
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
