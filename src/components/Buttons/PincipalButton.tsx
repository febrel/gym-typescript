import arrow from "../../assets/icons/arrow.svg";

type Texto = {
  text: string;
};

function PincipalButton(props: Texto) {
  return (
    <div className="button-header">
      <button className="button" type="button">
        <p className="button-text">{props.text}</p>
        <p className="button-white">
          <img src={arrow} alt="Ir" width={30} height={30} />
        </p>
      </button>
    </div>
  );
}

export default PincipalButton;
