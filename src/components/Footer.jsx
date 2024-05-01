import '../scss/components/Footer.scss';
import '../scss/core/variables.scss';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="www.linkedin.com/in/maría-lópez-herráiz">
          <img src={linkedin} alt="Linkedin icon" className="footerIcon" />
        </a>
        <a href="https://github.com/mloherr">
          <img src={github} alt="Github icon" className="footerIcon" />
        </a>
        <a href="https://www.instagram.com/marialoherr?igsh=MTYyZnR5Ym16Zjk5Mg==">
          <img src={instagram} alt="Instagram icon" className="footerIcon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
