import"./style.css";

import instagram from"./../../img/icons/instagram.svg";
import twitter from"./../../img/icons/Vector-1.svg";
import git from"./../../img/icons/Vector-2.svg";
import linkedin from"./../../img/icons/Vector-3.svg";

const Footer  = () => {
  return ( 
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/maksym_soloviov/?next=%2F"><img src={instagram} alt="Instagram" /></a></li>
            <li className="social__item"><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/"><img src={twitter} alt="Twitter" /></a></li>
            <li className="social__item"><a rel="noopener noreferrer" target="_blank" href="https://github.com/Makssol1208"><img src={git} alt="GitHub" /></a></li>
            <li className="social__item"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maxim-solovyov/"><img src={linkedin} alt="Linkedin" /></a></li>
          </ul>
          <div className="copyright">
            <p>© 2022 <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/">w3schools.com</a></p>
          </div>
        </div>
      </div>
  </footer>
 );
}
 
export default Footer;