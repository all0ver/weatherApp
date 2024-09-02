import { getData } from "./modules/getData.js";
import { dom } from "./modules/DOM.js";

const main = async () => {
  const test = await getData("berlin");
  dom(test.days);
}


main();

