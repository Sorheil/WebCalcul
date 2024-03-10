function render_screen(screen_calculator, button) {
  bouton_value = button.textContent.trim();
  if (list_digit_screenable.includes(bouton_value)) {
    show(screen_calculator, bouton_value);
  } else {
    switch (bouton_value) {
      case "AC":
        clearscreen(screen_calculator);
        break;
      case "=":
        my_evaleval(screen_calculator);
        break;
      case "re":
        delete_digit(screen_calculator);
        break;
      default:
        break;
    }
  }
}
function show(screen_calculator, value) {
  screen_calculator.textContent += value;
}
function clearscreen(screen_calculator) {
  screen_calculator.textContent = "";
  clearscreen_result(screen_result_calculator);
}
function delete_digit(screen_calculator) {
  screen_calculator.textContent = screen_calculator.textContent.slice(0, -1);
}

function my_evaleval(screen_calculator) {
  try {
    clearscreen_result(screen_result_calculator);
    show(screen_result_calculator, eval(screen_calculator.textContent));
  } catch (expression_error) {
    show(screen_result_calculator, "erreur");
  }
}
function clearscreen_result(screen_result_calculator) {
  screen_result_calculator.textContent = "";
}
