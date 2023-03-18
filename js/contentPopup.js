
var popup = document.getElementById("contentPopup");

var closeButton = document.getElementById("closeIcon");
var overlay =  document.getElementById("overlayID")

closeButton.addEventListener("click", () =>{
  popup.classList.add("popup-wrapper-hidden");
} )

overlayID.addEventListener("click", () =>{
  popup.classList.add("popup-wrapper-hidden");
} )

    var popupID = document.getElementById("popupID");


function openPopup(countryName, selectedValue) {
  
  var selectedName =  document.getElementById("selectedName")
  var selectedHeading = document.getElementById("selectedHeading");
  var selectedParagraph = document.getElementById("selectedParagraph");


    var  popupCountryName = document.getElementById("popupCountry")
   

    updateContent();

    function updateContent() {
    popupID.scrollTo({top:0})


    switch(selectedValue){
      case "legalStatus":
        selectedName.innerHTML = "Legal Status"
        selectedHeading.innerHTML = countryName.legalStatus[0];
        selectedParagraph.innerHTML = countryName.legalStatus[1];
      break;
      case "classification":
        selectedName.innerHTML = "Classification"

        selectedHeading.innerHTML = countryName.classification[0];
        selectedParagraph.innerHTML = countryName.classification[1];
      break;
      case "licensing":
        selectedName.innerHTML = "Licensing"


        selectedHeading.innerHTML = countryName.licensing[0];
        selectedParagraph.innerHTML = countryName.licensing[1];
      break;
      case "corporateGovernance":
        selectedName.innerHTML = "Corporate Governance"
    
      selectedHeading.innerHTML =
      countryName.corporateGovernance[0];
      selectedParagraph.innerHTML =
      countryName.corporateGovernance[1];
      break;
      case "riskManagement":
        selectedName.innerHTML = "Risk Management"

        selectedHeading.innerHTML = countryName.riskManagement[0];
        selectedParagraph.innerHTML = countryName.riskManagement[1];
      break;
      case "taxation":
        selectedName.innerHTML = "Taxation"
     
      selectedHeading.innerHTML = countryName.taxation[0];
      selectedParagraph.innerHTML = countryName.taxation[1];
      break;
      case "capitalControls":
        selectedName.innerHTML = "Capital Controls"
     
      selectedHeading.innerHTML = countryName.capitalControls[0];
      selectedParagraph.innerHTML = countryName.capitalControls[1];
      break;
      case "amlCft":
        selectedName.innerHTML = "AML/CFT"

        selectedHeading.innerHTML = countryName.amlCft[0];
        selectedParagraph.innerHTML = countryName.amlCft[1];
      break;
      case "grievanceRedressal":
        selectedName.innerHTML = "Grievance Redressal"
    
      selectedHeading.innerHTML =
        countryName.grievanceRedressal[0];
        selectedParagraph.innerHTML =
        countryName.grievanceRedressal[1];
      break;
      case "dataProtection":
        selectedName.innerHTML = "Data Protection"

        selectedHeading.innerHTML = countryName.dataProtection[0];
        selectedParagraph.innerHTML = countryName.dataProtection[1];
      break;
      case "advertisingRegulations":
        selectedName.innerHTML = "Advertising Regulations"
        selectedHeading.innerHTML =
        countryName.advertisingRegulations[0];
        selectedParagraph.innerHTML =
        countryName.advertisingRegulations[1];
      break;
      case "consumerAwareness":
        selectedName.innerHTML = "Consumer Awareness"
        selectedHeading.innerHTML =
        countryName.consumerAwareness[0];
        selectedParagraph.innerHTML =
        countryName.consumerAwareness[1];
      break;
      case "investorProtection":
        selectedName.innerHTML = "Investor Protection and Insurance"
        selectedHeading.innerHTML =
        countryName.investorProtection[0];
        selectedParagraph.innerHTML =
        countryName.investorProtection[1];
      break;
      case "restrictions":
        selectedName.innerHTML = "Restrictions"
        selectedHeading.innerHTML =
        countryName.restrictions[0];
        selectedParagraph.innerHTML =
        countryName.restrictions[1];
      break;
    }


      popup.classList.remove("popup-wrapper-hidden");
      popupCountryName.innerHTML = countryName.countryName;
     
     
    }

  }