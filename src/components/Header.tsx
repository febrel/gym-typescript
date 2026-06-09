import logo from "../assets/icons/strong-bull.svg";
import android from "../assets/icons/app-android.svg";
import ios from "../assets/icons/app-ios.svg";
import Navbar from "./Navbar";
import PincipalButton from "./Buttons/PincipalButton";

function Header() {
  const button1: string = "Explore";

  return (
    <header className="container-header">
      <div className="header">
        <Navbar />

        <div className="header-icon">
          <p>
            <img src={logo} alt="Logo" width={50} />
          </p>

          <p>BULL</p>
        </div>
      </div>

      <div className="grid-header">
        <div className="grid-content">
          <h1>YOUR FITNESS JOURNEY BEGINS HERE</h1>
          <p className="text">
            "At Gym, we help you get stronger—no matter your level. Top
            equipment, expert coaches, and a supportive community. Real results,
            no judgment. Let's train."
          </p>

          <PincipalButton text={button1} />

          <p className="text-botton">
            Miami Strong Gym1830 N Bayshore Dr CP-1, Miami, FL 33132
          </p>
        </div>

        <div className="grid-soft">
          <div className="cont-soft">
            <p className="cont-soft-text">Get Fit on the Go</p>
            <p>Download Our App </p>

            <div className="plat-sof">
              <p>
                <img src={android} alt="Ir" width={50} height={50} />
              </p>
              <p>
                <img src={ios} alt="Ir" width={50} height={50} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
