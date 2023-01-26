 // Legend
 function displayLegend(selectedData) {
    var legendCont = document.getElementById("legend-cont");
    var yellowLegendCont = document.getElementById("yellow-legend-cont");
    var greenLegend = document.getElementById("green-legend");
    var orangeLegend = document.getElementById("orange-legend");
    var yellowLegend = document.getElementById("yellow-legend");
    var redLegend = document.getElementById("red-legend");

    legendCont.style.display = "block";

    if (selectedData == "legalStatus") {
      greenLegend.innerHTML = "Legal";
      orangeLegend.innerHTML = "Partial Ban";
      redLegend.innerHTML = "General Ban";
      yellowLegend.innerHTML = " ";
      yellowLegendCont.style.display = "none";
    } else {
      greenLegend.innerHTML = "Yes";
      orangeLegend.innerHTML = "Partial";
      redLegend.innerHTML = "No";
      yellowLegend.innerHTML = "Proposed";
      yellowLegendCont.style.display = "flex";
    }
  }