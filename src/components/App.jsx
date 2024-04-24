import '../scss/App.scss';
// import PropTypes from "prop-types";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// NombreDeMiComponente.propTypes = {
//   nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
//   nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
// };

export default App;
