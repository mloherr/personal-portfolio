import '../scss/components/Footer.scss';
import '../scss/core/variables.scss';
import linkedin from './linkedin.svg';
import github from './github.svg';
import instagram from './instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a target="_blank" href="www.linkedin.com/in/maría-lópez-herráiz">
          <img src={linkedin} alt="Linkedin icon" className="footerIcon" />
        </a>
        <a target="_blank" href="https://github.com/mloherr">
          <img src={github} alt="Github icon" className="footerIcon" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/marialoherr?igsh=MTYyZnR5Ym16Zjk5Mg=="
        >
          <img src={instagram} alt="Instagram icon" className="footerIcon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
