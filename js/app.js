// #region Get Temp to Conv
document.getElementById("convertButton").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const convFromUnit = document.getElementById("convFromUnit").value;
  const convToUnit = document.getElementById("convToUnit").value;
  //If user input is not a number
  if (isNaN(temperature)) {
    document.getElementById("result").innerText =
      "Not valid. Please enter a number.";
    return;
  } //END IF STATEMENT

  //if # to convert = the # converted
  if (convFromUnit === convToUnit) {
    document.getElementById(
      "result"
    ).innerText = `No conversion needed. ${temperature} ${
      convFromUnit.charAt(0).toUpperCase() + convFromUnit.slice(1)
    }`;
    return;
  } //END IF STATEMENT
});

// #endregion

// #region

// #endregion

// #region

// #endregion

// #region convert from Cel to unit chosen

// #endregion
