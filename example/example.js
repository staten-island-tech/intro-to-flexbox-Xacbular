// const books = [
//   {
//     title: "The Hidden Forest",
//     author: "Ava Green",
//     genre: "Fantasy",
//     year: 2018,
//   },
//   {
//     title: "Code Runner",
//     author: "Liam Sparks",
//     genre: "Science Fiction",
//     year: 2021,
//   },
//   {
//     title: "Echoes of Time",
//     author: "Nora Quinn",
//     genre: "Historical Fiction",
//     year: 2015,
//   },
//   {
//     title: "The Quantum Key",
//     author: "Ethan Blake",
//     genre: "Thriller",
//     year: 2022,
//   },
//   {
//     title: "Hearts in Bloom",
//     author: "Sophie Wells",
//     genre: "Romance",
//     year: 2017,
//   },
//   {
//     title: "The Last Outpost",
//     author: "Jackson Cole",
//     genre: "Adventure",
//     year: 2020,
//   },
//   {
//     title: "Shadows of the Mind",
//     author: "Olivia Frost",
//     genre: "Mystery",
//     year: 2019,
//   },
//   {
//     title: "Digital Dreams",
//     author: "Leo Hart",
//     genre: "Cyberpunk",
//     year: 2023,
//   },
//   {
//     title: "Cooking with Fire",
//     author: "Grace Turner",
//     genre: "Non-Fiction",
//     year: 2016,
//   },
//   { title: "Into the Stars", author: "Maya Lin", genre: "Sci-Fi", year: 2024 },
// ];

// // function filterByGenre(genre) {
// //   let display = document.querySelector("#card-display");
// //   display.innerHTML = "";
// //   const filteredBooks = books.filter(() => book.genre === genre);
// //   filteredBooks.forEach((book) =>
// //     display.insertAdjacentHTML(
// //       "afterbegin",
// //       `<div class="book-card">
// //         <h2 class="book-title">${book.title}</h2>
// //         <p class="book-author">by ${book.author}</p>
// //         <p class="book-genre">Genre: ${book.genre}</p>
// //         <p class="book-year">Published: ${book.year}</p>
// //       </div>`
// //     )
// //   );
// // }
// // filterByGenre("Non-Fiction");

function filterByGenre(genre) {
  const cardCategory = card.getAttribute(".book-card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-genre");
    if (cardCategory === genre) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
filterByGenre("Non-Fuction");
