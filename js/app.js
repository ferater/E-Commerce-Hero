import { products } from "./productData.js";
class Hero {
  constructor(porductArray, firstProductIndex) {
    this.porductArray = porductArray;
    this.firstProductIndex = firstProductIndex;
    this.currentIndex;
    this.contentContainer = this.selectNode("main");
    this.pageIndicatorContainer = this.selectNode(".page-indicator-container");
    this.navigationArrows = this.selectNode(".nav-arrow", true);
    this.pageCount = this.selectNode(".page-count");
  }

  init() {
    this.populateContent();
    this.populatePageIndicators();
    this.slideWithArrows();
    //!set first content
    this.slideContent(this.firstProductIndex);
  }
  //!populate content
  populateContent() {
    this.contentContainer.innerHTML = this.porductArray
      .map((product) => {
        return `
        <div class="content">
          <div class="product-image">
            <img src="assets/img/${product.name}.png" alt="product" />
          </div>
        <h2 class="product-name">${product.title}</h2>
        <button class="btn add-to-cart-btn">
         <span>Buy Now</span>
         <span class="icon material-symbols-outlined"> shopping_cart </span>
        </button>
      </div>
      `;
      })
      .join("");
  }
  populatePageIndicators() {
    this.pageIndicatorContainer.innerHTML = this.porductArray.map((product) => {
      return `<div class="page-indicator"></div>`;
    });
    this.pageIndicators = this.selectNode(".page-indicator", true);
  }
  //!slide content when clicked arrows
  slideWithArrows() {
    this.navigationArrows.forEach((arrow) => {
      arrow.onclick = () => {
        if (arrow.classList.contains("prev-arrow")) {
          this.firstProductIndex -= 1;
          if (this.firstProductIndex < 0)
            this.firstProductIndex = this.porductArray.length - 1;
        } else {
          this.firstProductIndex += 1;
        }
        this.currentIndex = this.firstProductIndex % this.porductArray.length;
        this.slideContent(this.currentIndex);
      };
    });
  }
  //!slide content & set page number
  slideContent(currentIndex) {
    this.contentContainer.style.translate = `${
      currentIndex * (100 / this.porductArray.length) * -1
    }% 0px`;
    //!set page number
    this.pageCount.innerHTML = `<span>${currentIndex + 1}</span>/<span>${
      this.porductArray.length
    }</span>`;
    this.activateSelected(
      this.pageIndicators,
      this.pageIndicators[currentIndex],
      "active"
    );
  }
  //!activate selected element (menu, page selectors etc.)
  activateSelected(array, item, className) {
    array.forEach((element) => {
      if (element != item) {
        element.classList.remove(className);
      } else {
        element.classList.add(className);
      }
    });
  }
  //!select node(s)
  selectNode(elementAttr, all) {
    if (all) {
      return document.querySelectorAll(elementAttr);
    } else {
      return document.querySelector(elementAttr);
    }
  }
}
////////////////////////////////////////////////////////

const firstProduct = 0;
const hero = new Hero(products, firstProduct);
window.onload = hero.init();
