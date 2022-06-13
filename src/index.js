import "./style.scss";
import { loadHome, loadMenu, loadContact } from "./pageLoad";

document.addEventListener("DOMContentLoaded", () => loadHome());

document.querySelector("#home-btn").addEventListener("click", () => loadHome());

document.querySelector("#menu-btn").addEventListener("click", () => loadMenu());

document
  .querySelector("#contact-btn")
  .addEventListener("click", () => loadContact());
