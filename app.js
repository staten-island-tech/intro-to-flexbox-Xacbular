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
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
  {
    name: "RTX 5070TI",
    price: 299,
    inStock: true,
    brand: "Nvidia",
    img: "images/5070ti.jpg",
    alt: "50 Series Card",
  },
];

//create inject function
function inject(item) {
  //query the html where we inject the card
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img class="card-img" src=${item.img} alt="${item.alt}" />
        <div class="card-bottom">
          <h3 class="card-price">${"$" + item.price}</h3>
          <button class="style-button">Buy Now</button>
        </div>
      </div>`
    // `<h1 class="card">${item.name}</h1>`
  );
}
cards.forEach((cards) => inject(cards));
