import "./Button.css";

function Button() {
  let button = document.getElementById("btn");

  button.addEventListener("click", function () {
    alert("Button Clicked");
  });

  return (
    <button id="btn" type="button" className="btn btn-primary">
      Alert
    </button>
  );
}

export default Button;
