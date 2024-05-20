import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ProjectsSection from './ProjectsSection';
import GraphicDesignOne from './GraphicDesignOne';
import GraphicDesingTwo from './GraphicDesignTwo';
import GraphicDesignThree from './GraphicDesignThree';
import { Routes, Route } from 'react-router-dom';
import WebDevelopmentOne from './WebDevelopmentOne';
import WebDevelopmentTwo from './WebDevelopmentTwo';
import WebDevelopmentThree from './WebDevelopmentThree';
import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';

function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMeSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/graphic-design-1" element={<GraphicDesignOne />} />
        <Route path="/graphic-design-2" element={<GraphicDesingTwo />} />
        <Route path="/graphic-design-3" element={<GraphicDesignThree />} />
        <Route path="/web-development-1" element={<WebDevelopmentOne />} />
        <Route path="/web-development-2" element={<WebDevelopmentTwo />} />
        <Route path="/web-development-3" element={<WebDevelopmentThree />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
