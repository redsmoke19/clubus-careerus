import "../scss/style.scss"
import {iosVhFix} from "./utils/ios-vh-fix.js";
import {ScrollLock} from "./utils/scroll-lock.js";
import {initBurger} from "./modules/page-menu.js";
import {initPreloader} from "@/script/modules/preloader-2.js";

window.addEventListener('DOMContentLoaded', () => {
  window.scrollLock = new ScrollLock();
  initPreloader()
  iosVhFix();

  window.addEventListener('load', () => {
    initBurger();
  });
});
