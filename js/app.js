// #region Get Temp to Conv
document.getElementById("convertButton").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const convFromUnit = document.getElementById("convFromUnit").value;
  const convToUnit = document.getElementById("convToUnit").value;

  // If user input is not a number
  if (isNaN(temperature)) {
    document.getElementById("result").innerText = "ERROR: Not a valid entry.";
    return;
  } // END IF STATEMENT

  // If # to convert = the # converted displays ERROR mgs
  if (convFromUnit === convToUnit) {
    document.getElementById(
      "result"
    ).innerText = `ERROR: No conversion needed. ${temperature} ${
      convFromUnit.charAt(0).toUpperCase() + convFromUnit.slice(1)
    }`;
    return;
  } // END IF STATEMENT

  // Conversion Display
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
function convertTemperature(temp, fromUnit, toUnit) {
  let celsius;

  //
  switch (fromUnit) {
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

  switch (toUnit) {
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
