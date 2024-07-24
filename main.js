const PocCards = [
  {
    id: 1,
    title: "Pokemon",
    content: "Grass, Polson",
    kg: 6.9,
    age: 99,
    img: "./imgs/pokemon photo.svg",
  },
  {
    id: 2,
    title: "Anime",
    content: "Grass, Polson",
    kg: 4,
    age: 10,
    img: "./imgs/pokemon photo.svg",
  },
  {
    id: 3,
    title: "Music",
    content: "Grass, Polson",
    kg: 0.8,
    age: 20,
    img: "./imgs/pokemon photo.svg",
  },
  {
    id: 4,
    title: "Sports",
    content: "Grass, Polson",
    kg: 1.5,
    age: 15,
    img: "./imgs/pokemon photo.svg",
  },
  {
    id: 5,
    title: "Film",
    content: "Grass, Polson",
    kg: 3,
    age: 18,
    img: "./imgs/pokemon photo.svg",
  },
  {
    id: 6,
    title: "Book",
    content: "Grass, Polson",
    kg: 0.5,
    age: 25,
    img: "./imgs/pokemon photo.svg",
  },
  {
    id: 7,
    title: "Travel",
    content: "Grass, Polson",
    kg: 2,
    age: 10,
    img: "./imgs/pokemon photo.svg",
  },
  {
    id: 8,
    title: "Gaming",
    content: "Grass, Polson",
    kg: 0.7,
    age: 12,
    img: "./imgs/pokemon photo.svg",
  },
];

// add filer function input 

document.getElementById("filter").addEventListener("input", (e) => {
  const filterValue = e.target.value.toLowerCase();

  const filteredCards = PocCards.filter((card) =>
    card.title.toLowerCase().includes(filterValue) ||
    card.content.toLowerCase().includes(filterValue)
  );

  document.getElementById("cards").innerHTML = filteredCards.map((card) => {
    return `
      <div class="card">
        ${card.img ? `<img src="${card.img}" alt="${card.title}">` : ''}
        <div class="title">
          <h2>${card.title}</h2>
          <p>${card.content}</p>
        </div>
        <div class="flex">
          <b><p>${card.kg} kg</p></b>
          <b><p>${card.age} age</p></b>
        </div>
      </div>
    `;
  }).join("");
});

// Initial render
document.getElementById("cards").innerHTML = PocCards.map((card) => {
  return `
    <div class="card">
      ${card.img ? `<img src="${card.img}" alt="${card.title}">` : ''}
      <div class="title">
        <h2>${card.title}</h2>
        <p>${card.content}</p>
      </div>
      <div class="flex">
        <b><p>${card.kg} kg</p></b>
        <b><p>${card.age} age</p></b>
      </div>
    </div>
  `;
}).join("");

// document.getElementById("cards").innerHTML = PocCards.map((card) => {
//   return `
//         <div class="card">
//           <img src="${card.img}" alt="${card.title}">
//           <div class="title">
//           <h2>${card.title}</h2>
//           <p>${card.content}</p>
//           </div>
//           <div class="flex">
//             <b><p>${card.kg} kg</p></b>
//             <b><p>${card.age} age</p></b>
//           </div>
//         </div>
//       `;
// }).join("");
