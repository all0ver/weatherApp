import { getDataC } from "./modules/getData.js";
import { getDataF } from "./modules/getData.js";
import { dom } from "./modules/DOM.js";

const main = async () => {
  const test = await getDataC("berlin");
  dom(test.days);
  console.log(test)
}


main();

