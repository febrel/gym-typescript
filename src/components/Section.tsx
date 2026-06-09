import Carousel from "./Carousel";
import arrowBlack from "../assets/icons/arrow-black.svg";
import arrowWhite from "../assets/icons/arrow-white.svg";
import check from "../assets/icons/check-circle.svg";
import ArrowButton, { type ArrowButtonProps } from "./Buttons/ArrowButton";

const sampleData = [
  {
    title: "Basic Plan",
    description:
      "Access our premium cardio and weight zones during standard gym hours. Includes a complimentary initial orientation session and locker room access. Perfect for starting your fitness journey.",
    price: 29,
  },
  {
    title: "Advanced Plan",
    description:
      "Unlock 24/7 full gym access, advanced strength training zones, and unlimited group fitness classes. Includes personalized coaching checkpoints and premium recovery amenities. Built for dedicated athletes.",
    price: 59,
  },
  {
    title: "Family Plan",
    description:
      "Complete premium access for up to four family members. Includes specialized group workshops, childcare services, and customized fitness tracking for everyone. The perfect way to stay healthy together.",
    price: 89,
  },
];

function Section() {
  const button1: ArrowButtonProps = {
    text: "Orden now",
    buttonBg: "#d2c13b",
    buttonRadius: "8px",
    circleBg: "#fff",
    circleRadius: "5px",
  };
  return (
    <section id="#about" className="grid-section">
      <div className="section-izq">
        <p className="arrow">
          <img src={arrowBlack} alt="Arrow" className="segunda" />
          <img src={arrowWhite} alt="Arrow" className="primera" />
        </p>

        <div className="section-cuadro">
          <div className="container-title">
            <p className="title-prem">Premiun</p>
            <div>
              <p className="title-prem">$320</p>
              <p className="subtitle-prem">/moth</p>
            </div>
          </div>

          <ArrowButton {...button1} />

          <ul className="container-ul">
            <li>
              <img src={check} width={25} alt="check" /> Professional Trainers
            </li>
            <li>
              <img src={check} width={25} alt="check" /> All Facilities
            </li>
            <li>
              <img src={check} width={25} alt="check" /> Free Drinks ans
              Suplement
            </li>
            <li>
              <img src={check} width={25} alt="check" /> Diet Program
            </li>
          </ul>
        </div>
      </div>

      <div className="section-der">
        <h2>FLEXIBLE MEMBERSHIP PLANS TO SUIT YOUR LIFESTYLE</h2>
        <Carousel items={sampleData} />
      </div>
    </section>
  );
}

export default Section;
