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

//define index
let index = 0;

//select content container
const contentContainer = document.querySelector("main");
//select prev - next buttons
const navArrows = document.querySelectorAll(".nav-arrow ");

navArrows.forEach((arrow) => {
  arrow.onclick = () => {
    if (arrow.classList.contains("prev-arrow")) {
      index -= 1;
      if (index < 0) index = products.length - 1;
    } else {
      index += 1;
    }
    const currentIndex = Math.abs(index % products.length);
    setContent(currentIndex);
  };
});
const setContent = (currenntIndex) => {
  contentContainer.innerHTML = products
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
  const content = contentContainer.querySelector(".content");
  contentContainer.style.width = `${(products.length - 1) * content.scrollWidth}`
  contentContainer.style.translate = ` ${
    (currenntIndex * content.scrollWidth) * -1
  }px 0px`;
};
setContent();
