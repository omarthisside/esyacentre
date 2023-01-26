


setTimeout(()=>{
  var selectedValue = "legalStatus";
  updateMarkers(selectedValue)
},500);
fetch('https://omarthisside.github.io/esyacentre')
.then((response) => response.json())
.then((json) => countryData = json);

  
  var markers = [];

    function updateMarkers(selectedValue) {
      removeMarkers();
      displayLegend(selectedValue);
      console.log(selectedValue);
      for (let i = 0; i < countryData.length; i++) {
        var icon;
        if (
          countryData[i][selectedValue][0] == "Legal" ||
          countryData[i][selectedValue][0] == "Yes"
        ) {
          icon = greenIcon;
  
        } else if (
          countryData[i][selectedValue][0] == "Partial Ban" ||
          countryData[i][selectedValue][0] == "Partial" ||  countryData[i][selectedValue][0] == "Partial - General Legislation" )
      {
          icon = orangeIcon
        } else if (
          countryData[i][selectedValue][0] == "No" ||
          countryData[i][selectedValue][0] == "General Ban" ||
          countryData[i][selectedValue][0] == "Prohibited" 
        ) {
            icon = redIcon
        } else if (countryData[i][selectedValue] == "Proposed") {
          icon = yellowIcon
        }
        markers.push(
            L.marker([countryData[i].lat, countryData[i].lang], {
              icon: icon,
            })
              .addTo(map)
              .bindTooltip(`${countryData[i].countryName}`)
              .on("click", function () {
                openPopup(countryData[i]);
              })
          );
      }
    }

  // Remove Markers Function
  function removeMarkers() {
    for (let i = 0; i < markers.length; i++) {
      map.removeLayer(markers[i]);
    }
  }


  