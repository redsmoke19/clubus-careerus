import "../scss/style.scss"
import {iosVhFix} from "./utils/ios-vh-fix.js";
import {ScrollLock} from "./utils/scroll-lock.js";
import {initBurger} from "./modules/page-menu.js";

window.addEventListener('DOMContentLoaded', () => {
  window.scrollLock = new ScrollLock();
  iosVhFix();

  window.addEventListener('load', () => {
    initBurger();
  });
});
