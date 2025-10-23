// /* // we declare and define variables
// /* let x = 5;
// x = 6; */

// /* const x = 5;
// x = 6;
// console.log(x);
//  */
// //primitive
// // Strings represent names, characters letters etc
// // const x = "Ian";

// // //integers/ numbers
// // const y = 12345;

// // // boolean or true/false
// // const citizen = true;

// // //null is the absense of value
// // let name = null;

// // //undefined
// // let z;

// //functions are input output machines
// //functions accept inputs or parameters
// //declaring and defining function
// /* function add(x, y) {
//   //   console.log(x + y);
//   return x + y;
// }
// //run the function
// const bill = add(9, 8);
// console.log(bill);
//  */

// /* const x = 7;

// function returnThing() {
//   //function scope or local scope, only accessible inside this function
//   const x = 8;
//   console.log(x);
// }
//  */

// const name = "Nelson";
// console.log(`OMG everyone hates ${name}`);
//  */

const cards = [
  {
    name: "RTX 5050",
    price: 250,
    img: "images/5050.jpg",
    series: "50",
  },
  {
    name: "RTX 5060",
    price: 300,
    img: "images/5060.png",
    series: "50",
  },
  {
    name: "RTX 5060TI",
    price: 299,
    img: "images/5060TI.jpg",
    series: "50",
  },
  {
    name: "RTX 5070",
    price: 299,
    img: "images/5070.png",
    series: "50",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    img: "images/5070ti.jpg",
    series: "50",
  },
  {
    name: "RTX 5080",
    price: 299,
    img: "images/5080.png",
    series: "50",
  },
  {
    name: "RTX 5090",
    price: 299,
    img: "images/5090.png",
    series: "50",
  },
  {
    name: "RTX 6000 PRO",
    price: 299,
    img: "images/6000PRO.jpg",
    series: "60",
  },
  {
    name: "RTX 4060",
    price: 299,
    img: "images/4060.png",
    series: "40",
  },
  {
    name: "RTX 4060TI",
    price: 299,
    img: "images/4060ti.jpg",
    series: "40",
  },
  {
    name: "RTX 4070",
    price: 299,
    img: "images/4070.png",
    series: "40",
  },
  {
    name: "RTX 4070TI",
    price: 299,
    img: "images/4070ti.jpg",
    series: "40",
  },
  {
    name: "RTX 4080",
    price: 299,
    img: "images/4080.png",
    series: "40",
  },
  {
    name: "RTX 4090",
    price: 299,
    img: "images/4090.png",
    series: "40",
  },
  {
    name: "RTX 3050",
    price: 299,
    img: "images/3050.jpg",
    series: "30",
  },
  {
    name: "RTX 3060TI",
    price: 299,
    img: "images/3060ti.jpg",
    series: "30",
  },
  {
    name: "RTX 3070",
    price: 299,
    img: "images/3070.jpg",
    series: "30",
  },
  {
    name: "RTX 3070TI",
    price: 299,
    img: "images/3070ti.png",
    series: "30",
  },
  {
    name: "RTX 3080",
    price: 299,
    img: "images/3080.png",
    series: "30",
  },
  {
    name: "RTX 3090",
    price: 299,
    img: "images/3090.jpg",
    series: "30",
  },
];

let cart = [];

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-name="${item.name}" card-price="${item.price}">
      <h2 class="card-header">${item.name}</h2>
      <img class="card-img" src="${item.img}" alt="${item.series}" />
      <div class="card-bottom">
        <h3 class="card-price">$${item.price}</h3>
        <button class="style-button">Buy Now</button>
      </div>
    </div>`
  );
}

cards.forEach((card) => inject(card));

// Add-to-cart logic
document.addEventListener("click", function (data) {
  if (data.target.classList.contains("style-button")) {
    const card = data.target.closest(".card");
    const name = card.getAttribute("data-name");
    const price = card.getAttribute("card-price");
    addToCart(name, price);
  }
});

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  console.log(cart);
}

function filterCards(series) {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    const cardName = card.getAttribute("data-name");
    const digits = cardName.slice(4, 6);
    if (!series || digits.includes(series)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const series = btn.dataset.name;
    filterCards(series);
  });
});
