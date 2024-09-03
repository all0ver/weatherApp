import { getDataC } from "./modules/getData.js";
import { getDataF } from "./modules/getData.js";
import { todayFunc } from "./modules/DOM.js";
import { tomorrowFunc } from "./modules/DOM.js";
import { next5Days } from "./modules/DOM.js";


const main = async () => {
  const test = await getDataC("berlin");
  todayFunc(test.days);
  tomorrowFunc(test.days);
  next5Days(test.days);
}


main();

