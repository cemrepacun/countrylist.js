// GitHub repo - 'countrylist.js'
// Author - Nitin Nair
// Repo URL - https://github.com/nitin9nair/countrylist.js
// Date Created - 20/Feb/2019 

let countrySelector = document.getElementById('countrySelector');
let stateSelector = document.getElementById('stateSelector');
let citySelector = document.getElementById('citySelector');

let countrySelected = document.getElementById('countrySelector').value;
let stateSelected = document.getElementById('stateSelector').value;
let citySelected = document.getElementById('citySelector').value;

let displayCountry = document.getElementById('displayCountry');


let totalCountries = Object.keys(countrylist).length;
console.log(totalCountries); // 247

let totalStates = Object.keys(countrylist[0].states).length;
console.log(totalStates); // 32 - total state in Afganisthan

let totalCities = (Object.values(countrylist[0].states)[0]).length;
console.log(totalCities); // 5 - total cities of Badakshan, Afganistan

//default disabled select dropdown
stateSelector.disabled = true;
citySelector.disabled = true;

for (let x = 0; x < totalCountries; x++) {
    let optCountry = document.createElement("option");
    optCountry.value = countrylist[x].name;
    optCountry.textContent = countrylist[x].name;
    countrySelector.appendChild(optCountry);
}

function selectCountry () {
    let countrySelected = document.getElementById('countrySelector').value;
    displayCountry.textContent = countrySelected;

    if(stateSelector.childElementCount > 1) {
        stateSelector.length = 1;

        let optState = document.createElement("options");
        optState.value = "default";
        optState.disabled = true;
        optState.textContent = "Select State";
        stateSelector.selectedIndex = 0;
        stateSelector.appendChild(optState);
        displayState.textContent = null;
    }

    if(citySelector.childElementCount > 1) {
        citySelector.length = 1;

        let optCity = document.createElement("options");
        optCity.value = "default";
        optCity.disabled = true;
        optCity.textContent = "Select City";
        citySelector.selectedIndex = 0;
        citySelector.appendChild(optCity);
        citySelector.disabled = true;
        displayCity.textContent = null;
    }

    generateStates(countrySelected);
}

function generateStates(selectedCountry) {
    let stateSelector = document.getElementById('stateSelector');

    for (let x = 0; x < totalCountries; x++) {

        if(selectedCountry === countrylist[x].name) {
           
            if(countrylist[x].hasOwnProperty("states")) {
                stateSelector.disabled = false;
                for (let y = 0; y < Object.keys(countrylist[x].states).length; y++) {

                    let optState = document.createElement("option");
                    optState.value =  Object.keys(countrylist[x].states)[y];
                    optState.textContent =  Object.keys(countrylist[x].states)[y];
                    stateSelector.appendChild(optState);
                }

            } else {
               stateSelector.disabled = true;
               citySelector.disabled = true;
               citySelector.length = 1;

               let optState = document.createElement("options");
               optState.value = "default";
               optState.textContent = "Select State";
               stateSelector.selectedIndex = 0;
                stateSelector.appendChild(optState);
                displayState.textContent = null;

                let optCity = document.createElement("options");
                optCity.value = "default";
                optCity.textContent = "Select City";
                citySelector.selectedIndex = 0;
                citySelector.appendChild(optCity);
                displayCity.textContent = null;
            }
        }
    }
}

function selectState() {
    let stateSelected = document.getElementById('stateSelector').value;
    displayState.textContent = stateSelected;

    if(citySelector.childElementCount > 1) {
        citySelector.length = 1;

        let optCity = document.createElement("options");
        optCity.value = "default";
        optCity.textContent = "Select City";
        citySelector.selectedIndex = 0;
        citySelector.appendChild(optCity);
        displayCity.textContent = null;
    }

    generateCities(stateSelected);
}

function generateCities(selectedState) {
    let citySelector = document.getElementById('citySelector');

    for (let x = 0; x < totalCountries; x++) {
        
        let selectedCountry = document.getElementById('countrySelector').value;

        if(selectedCountry === countrylist[x].name) {
           
            if(countrylist[x].hasOwnProperty("states")) {
                stateSelector.disabled = false;
                
                for (let y = 0; y < Object.keys(countrylist[x].states).length; y++) {

                    if( selectedState === (Object.keys(countrylist[x].states)[y]) ) {
                        citySelector.disabled = false;
                        for (let z = 0; z < (Object.values(countrylist[x].states)[y]).length; z++) {

                            let opt = document.createElement("option");
                            opt.value =  (Object.values(countrylist[x].states)[y])[z];
                            opt.textContent =  (Object.values(countrylist[x].states)[y])[z];
                            citySelector.appendChild(opt);
    
                        }
                    }
                }

            } else {
               citySelector.disabled = true;
            }
        }
    }
}

function selectCity() {
    let citySelected = document.getElementById('citySelector').value;
    displayCity.textContent = citySelected;
}

function resetDropdown() {

    countrySelector.selectedIndex = 0;
    displayCountry.textContent = null;

    stateSelector.selectedIndex = 0;
    stateSelector.length = 1;
    stateSelector.disabled = true;
    displayState.textContent = null;

    citySelector.selectedIndex = 0;
    citySelector.length = 1;
    citySelector.disabled = true;
    displayCity.textContent = null;


}