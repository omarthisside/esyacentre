
var popup = document.getElementById("contentPopup");

var closeButton = document.getElementById("closeIcon");

closeButton.addEventListener("click", () =>{
  popup.classList.add("popup-wrapper-hidden");
} )



function openPopup(countryName) {
    var  popupCountryName = document.getElementById("popupCountry")
    var legalStatusHeading = document.getElementById("legalStatusHeading");
    var legalStatusContent = document.getElementById("legalStatusContent");
    var classificationHeading = document.getElementById(
      "classificationHeading"
    );
    var classificationContent = document.getElementById(
      "classificationContent"
    );
    var licensingHeading = document.getElementById("licensingHeading");
    var licensingContent = document.getElementById("licensingContent");
    var corporateGovernanceHeading = document.getElementById(
      "corporateGovernanceHeading"
    );
    var corporateGovernanceContent = document.getElementById(
      "corporateGovernanceContent"
    );
    var riskManagementHeading = document.getElementById(
      "riskManagementHeading"
    );
    var riskManagementContent = document.getElementById(
      "riskManagementContent"
    );
    var taxationHeading = document.getElementById("taxationHeading");
    var taxationContent = document.getElementById("taxationContent");
    var capitalControlsHeading = document.getElementById(
      "capitalControlsHeading"
    );
    var capitalControlsContent = document.getElementById(
      "capitalControlsContent"
    );
    var amlCftHeading = document.getElementById("amlCftHeading");
    var amlCftContent = document.getElementById("amlCftContent");
    var grivanceRedressalHeading = document.getElementById(
      "grivanceRedressalHeading"
    );
    var grivanceRedressalContent = document.getElementById(
      "grivanceRedressalContent"
    );
    var dataProtectionHeading = document.getElementById(
      "dataProtectionHeading"
    );
    var dataProtectionContent = document.getElementById(
      "dataProtectionContent"
    );
    var advertisingRegulationsHeading = document.getElementById(
      "advertisingRegulationsHeading"
    );
    var advertisingRegulationsContent = document.getElementById(
      "advertisingRegulationsContent"
    );

    updateContent();

    function updateContent() {
      popup.classList.remove("popup-wrapper-hidden");
      popupCountryName.innerHTML = countryName.countryName;
      legalStatusHeading.innerHTML = countryName.legalStatus[0];
      legalStatusContent.innerHTML = countryName.legalStatus[1];
      classificationHeading.innerHTML = countryName.classification[0];
      classificationContent.innerHTML = countryName.classification[1];
      licensingHeading.innerHTML = countryName.licensing[0];
      licensingContent.innerHTML = countryName.licensing[1];
      corporateGovernanceHeading.innerHTML =
        countryName.corporateGovernance[0];
      corporateGovernanceContent.innerHTML =
        countryName.corporateGovernance[1];
      riskManagementHeading.innerHTML = countryName.riskManagement[0];
      riskManagementContent.innerHTML = countryName.riskManagement[1];
      taxationHeading.innerHTML = countryName.taxation[0];
      taxationContent.innerHTML = countryName.taxation[1];
      capitalControlsHeading.innerHTML = countryName.capitalControls[0];
      capitalControlsContent.innerHTML = countryName.capitalControls[1];
      amlCftHeading.innerHTML = countryName.amlCft[0];
      amlCftContent.innerHTML = countryName.amlCft[1];
      grievanceRedressalHeading.innerHTML =
        countryName.grievanceRedressal[0];
      grievanceRedressalContent.innerHTML =
        countryName.grievanceRedressal[1];
      dataProtectionHeading.innerHTML = countryName.dataProtection[0];
      dataProtectionContent.innerHTML = countryName.dataProtection[1];
      advertisingRegulationsHeading.innerHTML =
        countryName.advertisingRegulations[0];
      advertisingRegulationsContent.innerHTML =
        countryName.advertisingRegulations[1];
    }

  }