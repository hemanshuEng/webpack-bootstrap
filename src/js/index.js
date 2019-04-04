import style from "../scss/main.scss";
import { clickBtn } from "./dom-loader";
let eventClick = (function() {
  console.log("app started in webpack starte");
  clickBtn.addEventListener("click", clickConsole);
})();

function clickConsole() {
  console.log("cilck me click !!!!");
}
