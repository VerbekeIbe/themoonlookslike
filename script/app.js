"use strict";

//#region ***  DOM references ***

//#endregion

//#region ***  Callback-Visualisation - show___ ***
const showMoon = (moonphase, today) => {
const moonphaseinfo = document.querySelector('.js-moonphase'),
moondate = document.querySelector('.js-moondate'),
moon = document.querySelector('.js-moon')



};

//#endregion

//#region ***  Callback-No Visualisation - callback___  ***

//#endregion

//#region ***  Data Access - get___ ***

//#endregion

//#region ***  Event Listeners - listenTo___ ***

//#endregion

let getAPI = async () => {


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

const ENDPOINT = `https://api.weatherapi.com/v1/astronomy.json?key=383178b5b4a3485eb5e195832201412&q=Kortrijk&dt=${today}`;

const request = await fetch(`${ENDPOINT}`);
	const data = await request.json();
	console.log(data)

    let moonphase = data.astronomy.astro.moon_phase
    console.log(moonphase)
    
    showMoon(moonphase, today);

};






//#region ***  INIT / DOMContentLoaded  ***
document.addEventListener('DOMContentLoaded', function() {
	// 1
    getAPI();
    console.log("Dom is geladen.")
});