//define products
const products = [
  {
    name: "mouse-black",
    title: "AI Mouse 1st 2.4G Wireless Mouse (Black)",
  },
  {
    name: "mouse-gray",
    title: "AI Mouse 2nd 2.4G Wireless Mouse (Gray)",
  },
  {
    name: "mouse-blue",
    title: "AI Mouse 2nd 2.4G Wireless Mouse (Blue)",
  },
];

///////////////////////////////////////////////////////////////////////////////////////////
const createContent = () => {
  mainDiv.innerHTML = products
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
};
///////////////////////////////////////////////////////////////////////////////////////////
const createPageSelectors = () => {
  pageSelectorContainer.innerHTML = products
    .map((product, index) => {
      return `<div class="page-selector"></div>`;
    })
    .join("");
};
///////////////////////////////////////////////////////////////////////////////////////////
const createHtmlElements = () => {
  createContent();
  createPageSelectors();
};
window.addEventListener("load", createHtmlElements);
///////////////////////////////////////////////////////////////////////////////////////////

//define index
let index = 0;
let currentIndex = 0;

//select content container
const mainDiv = document.querySelector("main");
//select prev - next buttons
const navigationArrows = document.querySelectorAll(".nav-arrow ");
//select page selector container
const pageSelectorContainer = document.querySelector(".page-selectors");
//select page selectors
const pageSelectors = pageSelectorContainer.querySelectorAll(".page-selector")
console.log(pageSelectors);

navigationArrows.forEach((arrow) => {
  arrow.onclick = () => {
    if (arrow.classList.contains("prev-arrow")) {
      index -= 1;
      if (index < 0) index = products.length - 1;
    } else {
      index += 1;
    }
    currentIndex = Math.abs(index % products.length);
    console.log(currentIndex);
  };
});
// mainDiv.style.translate = ` ${
//   currenntIndex * content.scrollWidth * -1
// }px 0px`;
