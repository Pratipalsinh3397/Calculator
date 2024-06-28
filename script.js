const input = document.querySelector("input");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let key = e.target.id;

    switch (key) {
      case "clear":
        input.value = "";
        break;
      case "backspace":
        input.value = input.value.slice(0, -1);
        break;
      case "percentage":
        if (input.value != "") {
          temp = eval(input.value);
          input.value = temp / 100;
        }
        break;
      case "divide":
        input.value += "/";
        break;
      case "seven":
        input.value += 7;
        break;
      case "eight":
        input.value += 8;
        break;
      case "nine":
        input.value += 9;
        break;
      case "multiply":
        input.value += "*";
        break;
      case "four":
        input.value += 4;
        break;
      case "five":
        input.value += 5;
        break;
      case "six":
        input.value += 6;
        break;
      case "minus":
        input.value += "-";
        break;
      case "one":
        input.value += 1;
        break;
      case "two":
        input.value += 2;
        break;
      case "three":
        input.value += 3;
        break;
      case "plus":
        input.value += "+";
        break;
      case "dbzero":
        input.value += "00";
        break;
      case "zero":
        input.value += 0;
        break;
      case "dot":
        input.value += ".";
        break;
      case "result":
        if (input.value != "") {
          input.value = eval(input.value);
        }
        break;
      default:
        break;
    }
    
  });
});
