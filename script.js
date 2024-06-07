// alert(
//   `This website will change the entered number to celsius or farhenheit based on the radio button selected`
// );

document.getElementById("submitBtn").onclick = function () {
  let temp;

  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("userInput").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
  } else if (document.getElementById("fButton").checked) {
    temp = document.getElementById("userInput").value;
    temp = Number(temp);
    temp = teFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
  } else {
    document.getElementById("tempLabel").innerHTML =
      "Please Select a Unit first.";
  }
};

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

// 1.8 is 9/5
function teFahrenheit(temp) {
  return temp * (9 / 5) + 32;
}
