import bullBlack from "../assets/icons/strong-bull_black.svg";
import github from "../assets/icons/github.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import google from "../assets/icons/gplus.svg";
import arrowUp from "../assets/icons/arrow-up.svg";

function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const duration = 1000; // Milisegundos (1s = "un poco lento")
    const start = window.scrollY;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutCubic (acelera al inicio, frena suavemente al final)
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };
  return (
    <footer id="#contact" className="footer">
      <div className="container-footer">
        <div className="footer-1">
          <div className="footer-icon">
            <p>
              <img src={bullBlack} width={50} alt="Bull" />
            </p>
            <p className="icon-desc">BULL</p>
          </div>
          <p className="parf">9454 Columbio Ave, New York, NY 10029</p>
          <p className="parf">info@bull.com</p>
        </div>
        <div className="footer-2">
          <ul>
            <li className="footer-title">
              <strong>Menu</strong>
            </li>
            <li>
              <a href="#about" className="enlace-linea">
                About
              </a>
            </li>
            <li>
              <a href="#membership" className="enlace-linea">
                Membership
              </a>
            </li>
            <li>
              <a href="#blog" className="enlace-linea">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-3">
          <ul>
            <li className="footer-title">
              <strong>Quick Links</strong>
            </li>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
            <li>
              <a href="">Contact US</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-4">
          <ul>
            <li className="footer-title">
              <strong>Operational</strong>
            </li>
            <li>Every day: 9:00 - 22.00</li>
            <li>Sat - Sun: 8.00 - 21.00</li>
          </ul>
          <ul>
            <li className="footer-title">
              <strong>New Schedule?</strong>
            </li>
            <li>+ (123) 1900-567-8900</li>
          </ul>
        </div>
      </div>

      <div className="container-social">
        <div className="container-icons">
          <ul>
            <li>
              <a href="">
                <img src={github} width={40} alt="Github" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={linkedin} width={40} alt="Linkeding" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={facebook} width={40} alt="Facebook" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={google} width={40} alt="Google" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copy">
          <p>Copyright © BULL. Al Rights Reserved</p>
        </div>
        <div className="up">
          <a href="#" onClick={handleScrollToTop} aria-label="Volver al inicio">
            <img src={arrowUp} width={40} alt="Up" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
