import '../scss/App.scss';
// import PropTypes from "prop-types";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ProjectsSection from './ProjectsSection';
import GraphicDesignOne from './GraphicDesignOne';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/graphic-design-1" element={<GraphicDesignOne />} />
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
