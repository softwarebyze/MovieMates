import "./WhiteButtom.sass";

function WhiteButtom({text, onClickHandler}) {
  return (
    <button className="white-button" type="button" onClick={() => onClickHandler()}>
      <span>{text}</span>
    </button>
  );
}

export default WhiteButtom;