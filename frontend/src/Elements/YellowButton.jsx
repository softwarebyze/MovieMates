import "./YellowButton.sass";

function YellowButton({text, type, onClickHandler}) {
  return (
    <button className={`yellow-button yellow-button-${type}`} type="button" onClick={() => onClickHandler()}>
      <span>{text}</span>
    </button>
  );
}

export default YellowButton;