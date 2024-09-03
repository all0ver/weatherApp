import { getDataC } from "./modules/getData.js";
import { getDataF } from "./modules/getData.js";
import { todayFunc } from "./modules/DOM.js";
import { tomorrowFunc } from "./modules/DOM.js";
import { next5Days } from "./modules/DOM.js";


let metric = 'C';

let current;

const main = async (location) => {
  const locationName = document.querySelector("#location");
  let place;
  if (metric === 'C') {
    place = await getDataC(location);
  } else {
    place = await getDataF(location);
  }
  todayFunc(place.days);
  tomorrowFunc(place.days);
  next5Days(place.days);
  current = place;

  locationName.innerHTML = place.resolvedAddress;
}


const search = document.querySelector("#search")
const searchInput = document.querySelector("input");

search.addEventListener("click", () => {
  main(searchInput.value);
});

const F = document.querySelector("#FDiv");
const C = document.querySelector("#CDiv");

F.addEventListener("click", async () => {
  metric = 'F';
  await main(current.resolvedAddress);
  const metricTemp = document.querySelectorAll(".metricTemp");
  const metricWind = document.querySelectorAll(".metricWind");

  metricTemp.forEach(element => {
    element.innerHTML = '°F';
  });
  metricWind.forEach(element => {
    element.innerHTML = ' MPH';
  });

  F.classList.add('bg-[#4d4d4d]');
  F.classList.remove('bg-[#2b2b2b]');
  C.classList.add('bg-[#2b2b2b]');
  C.classList.remove('bg-[#4d4d4d]');
});

C.addEventListener("click", async () => {
  metric = 'C';
  await main(current.resolvedAddress);
  const metricTemp = document.querySelectorAll(".metricTemp");
  const metricWind = document.querySelectorAll(".metricWind");

  metricTemp.forEach(element => {
    element.innerHTML = '°C';
  });
  metricWind.forEach(element => {
    element.innerHTML = ' m/s';
  });

  C.classList.add('bg-[#4d4d4d]');
  C.classList.remove('bg-[#2b2b2b]');
  F.classList.add('bg-[#2b2b2b]');
  F.classList.remove('bg-[#4d4d4d]');
});


main('berlin');
