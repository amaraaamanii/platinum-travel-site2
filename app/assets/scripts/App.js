import "../styles/styles.css";
import MobileMenu from "./modules/mobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);
let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal"*/ "./modules/modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => Console.log("файлыг дуудахад алдаа гарлаа"));
    } else {
      modal.openModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
