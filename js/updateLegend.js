 // Legend
 function displayLegend(selectedData) {
    var selectedKey = document.getElementById("selectedFilter");
    var legendCont = document.getElementById("legend-cont");
    var yellowLegendCont = document.getElementById("yellow-legend-cont");
    var greenLegend = document.getElementById("green-legend");
    var orangeLegend = document.getElementById("orange-legend");
    var yellowLegend = document.getElementById("yellow-legend");
    var redLegend = document.getElementById("red-legend");

    legendCont.style.display = "block";

    updateNameOnLegend();

    function updateNameOnLegend(){
      switch(selectedData){
          case "legalStatus":
          selectedKey.innerHTML = "Legal Status";
          break;
          case "classification":
          selectedKey.innerHTML = "Classification";
          break;
          case "licensing":
          selectedKey.innerHTML = "Licensing";
          break;
          case "corporateGovernance":
          selectedKey.innerHTML = "Corporate Governance";
          break;
          case "riskManagement":
          selectedKey.innerHTML = "Risk Management";
          break;
          case "taxation":
          selectedKey.innerHTML = "Taxation";
          break;
          case "capitalControls":
          selectedKey.innerHTML = "Capital Controls";
          break;
          case "amlCft":
          selectedKey.innerHTML = "Aml/Cft";
          break;
          case "grievanceRedressal":
          selectedKey.innerHTML = "Grievance Redressal";
          break;
          case "dataProtection":
          selectedKey.innerHTML = "Data Protection";
          break;
          case "advertisingRegulations":
          selectedKey.innerHTML = "Advertising Regulations";
          break;
      }
    }

    if (selectedData == "legalStatus") {
      greenLegend.innerHTML = "Legal";
      orangeLegend.innerHTML = "Partial Ban";
      redLegend.innerHTML = "General Ban";
      yellowLegend.innerHTML = " ";
      yellowLegendCont.style.display = "none";}
    // }  else if(selectedData == "dataProtection" || selectedData == "grievanceRedressal") {
    //   greenLegend.innerHTML = "Yes";
    //   orangeLegend.innerHTML = "Partial - General Legislation";
    //   redLegend.innerHTML = "No";
    //   yellowLegend.innerHTML = "Proposed";
    //   yellowLegendCont.style.display = "flex";
    // }

    // else if(selectedData == "advertisingRegulations" || selectedData == "grievanceRedressal") {
    //   greenLegend.innerHTML = "Yes";
    //   orangeLegend.innerHTML = "Partial";
    //   redLegend.innerHTML = "Prohibited";
    //   yellowLegend.innerHTML = "Proposed";
    //   yellowLegendCont.style.display = "flex";
    // }
    
    
    else {
      greenLegend.innerHTML = "Yes";
      orangeLegend.innerHTML = "Partial";
      redLegend.innerHTML = "No";
      yellowLegend.innerHTML = "Proposed";
      yellowLegendCont.style.display = "flex";
    }
  }