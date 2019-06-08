import style from "../scss/main.scss";
import "bootstrap";
import { clickBtn } from "./dom-loader";
let eventClick = (function() {
  console.log("app started in webpack starte");
  clickBtn.addEventListener("click", clickConsole);
})();

function clickConsole() {
  console.log("cilck me click !!!!");
}

$(function () {
  $('[data-toggle="popover"]').popover()
})