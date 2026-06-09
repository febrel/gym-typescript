import arrow from "../../assets/icons/arrow.svg";

export type ArrowButtonProps = {
  text: string;
  buttonBg?: string;
  buttonRadius?: string;
  circleBg?: string;
  circleRadius?: string;
};

function ArrowButton(props: ArrowButtonProps) {
  return (
    <div className="button-main">
      <button
        className="button"
        type="button"
        style={{
          backgroundColor: props.buttonBg,
          borderRadius: props.buttonRadius,
        }}
      >
        <span className="button-text">{props.text}</span>
        <span
          className="button-color"
          style={{
            backgroundColor: props.circleBg,
            borderRadius: props.circleRadius,
          }}
        >
          <img src={arrow} alt="Ir" width={30} height={30} />
        </span>
      </button>
    </div>
  );
}

export default ArrowButton;
