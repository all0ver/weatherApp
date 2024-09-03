import { getDataC } from "./modules/getData.js";
import { getDataF } from "./modules/getData.js";
import { todayFunc } from "./modules/DOM.js";
import { tomorrowFunc } from "./modules/DOM.js";
import { next5Days } from "./modules/DOM.js";


const main = async () => {
  const place = await getDataC("tokyo");
  todayFunc(place.days);
  tomorrowFunc(place.days);
  next5Days(place.days);
  console.log(place)
}


main();

