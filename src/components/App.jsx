import '../scss/App.scss';
// import PropTypes from "prop-types";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ProjectsSection from './ProjectsSection';
import GraphicDesignOne from './GraphicDesignOne';
import { Routes, Route } from 'react-router-dom';
import WebDevelopmentOne from './WebDevelopmentOne';

function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/graphic-design-1" element={<GraphicDesignOne />} />
        <Route path="/web-development-1" element={<WebDevelopmentOne />} />
      </Routes>
      <Footer />
    </div>
  );
}

{
  /* NombreDeMiComponente.propTypes = {
  nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
   nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
}; */
}

export default App;
