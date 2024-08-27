// #region Get Temp to Conv
document.getElementById("convertButton").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const convFromUnit = document.getElementById("convFromUnit").value;
  const convToUnit = document.getElementById("convToUnit").value;

  // If user input is not a number
  if (isNaN(temperature)) {
    document.getElementById("result").innerText =
      "Not valid. Please enter a number.";
    return;
  } // END IF STATEMENT

  // If # to convert = the # converted
  if (convFromUnit === convToUnit) {
    document.getElementById(
      "result"
    ).innerText = `No conversion needed. ${temperature} ${
      convFromUnit.charAt(0).toUpperCase() + convFromUnit.slice(1)
    }`;
    return;
  } // END IF STATEMENT

  // Convert temp #
  const convertedTemperature = convertTemperature(
    temperature,
    convFromUnit,
    convToUnit
  );
  document.getElementById(
    "result"
  ).innerText = `From: ${temperature} ${convFromUnit.charAt(0).toUpperCase()} 
  To: ${convertedTemperature} ${
    convToUnit.charAt(0).toUpperCase() + convToUnit.slice(1)
  }`;
});
// #endregion

// #region convert Temperature
function convertTemperature(temp, from, to) {
  let celsius;

  // Convert from to Celcius
  switch (from) {
    case "fahrenheit":
      celsius = ((temp - 32) * 5) / 9;
      break;
    case "kelvin":
      celsius = temp - 273.15;
      break;
    case "celsius":
    default:
      celsius = temp;
  }

  // Convert from Celsius to the target unit
  switch (to) {
    case "fahrenheit":
      return (celsius * 9) / 5 + 32;
    case "kelvin":
      return celsius + 273.15;
    case "celsius":
    default:
      return celsius;
  }
} // END SWITCH
// #endregion
