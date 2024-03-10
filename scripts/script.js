const button__digit_element = document.querySelector(
  ".calculator__button__digit"
);

const screen_calculator = document.querySelector(
  ".calculator__screen__expression"
);

const screen_result_calculator = document.querySelector(
  ".calculator__screen__result"
);

function create_button(value_bouton) {
  let button;

  switch (value_bouton) {
    case "=":
      button = `<div class="digit digit--style_equal ">${value_bouton}</div>`;
      break;
    case "( )":
    case "%":
    case "*":
    case "-":
    case "+":
    case "/":
      button = `<div class="digit digit--style_blue">
    ${value_bouton}
    </div>`;
      break;

    case "AC":
      button = `<div class="digit digit--style_allclear">${value_bouton}</div>`;
      break;

    default:
      button = `<div class="digit">
    ${value_bouton}
    </div>`;
      break;
  }
  button__digit_element.innerHTML += button;
}

function create_all_button(list_button) {
  for (let i = 0; i < list_button.length; i++) {
    create_button(list_button[i]);
  }
}

function load_webcalcul(list_digits) {
  create_all_button(list_digits);

  const button_digits = document.querySelectorAll(".digit");
  
  for (let i = 0; i < button_digits.length; i++) {
    let button = button_digits[i];
    button.addEventListener("click", () => {
      //screen_calculator.textContent += button.textContent;
      render_screen(screen_calculator, button);
    });
  }
}
