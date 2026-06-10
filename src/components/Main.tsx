import arrowWhite from "../assets/icons/arrow-white.svg";
import arrowYellow from "../assets/icons/arrow-yellow.svg";
import main1 from "../assets/main1.webp";
import main2 from "../assets/main2.webp";
import PincipalButton from "./Buttons/PincipalButton";
import ArrowButton, { type ArrowButtonProps } from "./Buttons/ArrowButton";

function Main() {
  const button1: string = "Explore more";

  const button2: ArrowButtonProps = {
    text: "Sign up",
    buttonBg: "#fff",
    buttonRadius: "8px",
    circleBg: "#d2c13b",
    circleRadius: "50%",
  };

  const button3: ArrowButtonProps = {
    text: "Orden now",
    buttonBg: "#d2c13b",
    buttonRadius: "8px",
    circleBg: "#fff",
    circleRadius: "5px",
  };

  return (
    <main id="#Home" className="container-main">
      <div className="personal-main">
        <p className="arrow">
          <img src={arrowWhite} alt="Arrow" className="primera" />
          <img src={arrowYellow} alt="Arrow" className="segunda" />
        </p>
        <h2>PERSONAL TRAINING</h2>

        <div className="cuadro">
          <p className="cuadro-title">WE OFFER</p>
          <p className="cuadro-text">Free initial sessions for membres</p>

          <ArrowButton {...button2} />
        </div>
      </div>

      <div className="personal-img">
        <img src={main1} alt="Foto" />
      </div>

      <div className="personal-explore">
        <img src={main2} alt="Foto" />
      </div>

      <div className="personal-description">
        <p className="text-personal">
          Transform your body and reach your goals with our professional [Gym
          Name] trainers. We provide custom workout plans, nutritional guidance,
          and the constant motivation you need to succeed. Stop guessing and
          start seeing real results.
        </p>
        <PincipalButton text={button1} />
      </div>
    </main>
  );
}

export default Main;
