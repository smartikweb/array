const painters = [
  {
    firstName: "Herb",
    lastName: "Aach",
    born: 1923,
    passed: 1985,
    paintings: 12
  },
  {
    firstName: "Pacita",
    lastName: "Abad",
    born: 1946,
    passed: 2004,
    paintings: 52
  },
  {
    firstName: "Daniel",
    lastName: "Maclise",
    born: 1806,
    passed: 1870,
    paintings: 2
  },
  {
    firstName: "Aileen",
    lastName: "Eagleton",
    born: 1902,
    passed: 1984,
    paintings: 35
  },
  {
    firstName: "Thomas",
    lastName: "Eakins",
    born: 1844,
    passed: 1916,
    paintings: 1
  },
  {
    firstName: "Edgar",
    lastName: "Degas ",
    born: 1834,
    passed: 1917,
    paintings: 34
  },
  {
    firstName: "Martin",
    lastName: "Desjardins",
    born: 1637,
    passed: 1694,
    paintings: 7
  }
];

const clients = [
  "Fiona, Bownd",
  "Bren, Strutt",
  "Cletis, Cobelli",
  "Booth, Kedge",
  "Demetris, Parman",
  "Cull, Itzhaki",
  "Ertha, Bikker",
  "Maggi, Stockport",
  "Horace, Hearthfield",
  "Vassili, Pomfret",
  "Cirilo, Zottoli",
  "Trueman, MacDermot",
  "Karla, Spencer",
  "Allys, McManamon",
  "Saloma, Boolsen",
  "Giacomo, Vedntyev",
  "Essa, Blacket",
  "Dari, Muncer",
  "Jobi, Joscelyn",
  "Eimile, Joberne"
];

const cars = [
  "Honda",
  "Saab",
  "Ford",
  "Mitsubishi",
  "Buick",
  "Toyota",
  "Mitsubishi",
  "Honda",
  "Buick",
  "Volvo",
  "Oldsmobile",
  "Mercedes-Ben",
  "Chevrolet",
  "Volkswagen",
  "GMC",
  "Chevrolet",
  "Jeep",
  "Acura",
  "Acura",
  "Suzuki"
];

// const myLuckyNumber = Array(5);
console.log("-table-");
console.table(painters);

// 1. Array Length
console.log("-Array Length-");

console.log("Painters length", painters.length);
console.log("Cars length", cars.length);
console.log("Clients length", clients.length);

// 2. Array Iteration with FOR & foreach

// for (let i = 0; i < painters.length; i++) {
//   const element = painters[i];
//   console.log(element);
// }

// painters.forEach(painter => {
//   console.log(painter);
// });
// 3. String to array .split
// const myFavFood = "Pizza|Pasta|Burger";
// console.log(myFavFood.split("|"));
// const myFavSport = ["football", "tennis", "hockey"];
// console.log(myFavSport.join(", "));

// 4. Array .filter()
console.log("--Array .filter---");

const filteredPainters = painters.filter(
  painter => painter.born >= 1800 && painter.born < 1900
);
console.table(filteredPainters);
// 5. Array .map()

console.log("---Array .map---");

const paintersWithYears = painters.map(painter => {
  return {
    name: `${painter.firstName} ${painter.lastName}`,
    years: `${painter.born} - ${painter.passed} `
  };
  // return newPainter;
});
console.table(paintersWithYears);

// 6. Array .sort()
// Sort painters by years lived
console.log("----Array .sort----");

const sortPainters = painters
  .map(painter => {
    return {
      name: `${painter.firstName} ${painter.lastName}`,
      years: `${painter.born} - ${painter.passed} `,
      age: painter.passed - painter.born
    };
  })
  .sort(
    (currentPainter, nextPainter) =>
      currentPainter.age > nextPainter.age ? -1 : 1
    // const currentPainterYears = currentPainter.passed - currentPainter.born;
    // const nextPainterYears = nextPainter.passed - nextPainter.born;
    // console.log(currentPainteryears, nextPainteryears);
    // return currentPainterYears > nextPainterYears ? -1 : 1;

    // if (currentPainterYears > nextPainterYears) {
    //   return -1;
    // } else {
    //   return 1;
    // }
  );
console.table(sortPainters);

// Sort client by lastName

const sortedClients = clients.sort((lastClient, nextClient) => {
  const [lastClientFirstName, lastClientLastName] = lastClient.split(", ");
  const [nextClientFirstName, nextClientLastName] = nextClient.split(", ");
  return lastClientLastName > nextClientLastName ? 1 : -1;
});
console.table(sortedClients);

// 7. Array .reduce()
// Total amound of paintings
console.log("---Array .reduce----");

const totalPaintings = painters.reduce((amount, painter) => {
  return amount + painter.paintings;
}, 0);
console.log("Total paintings: ", totalPaintings);

// Sum app cars
const carsReduce = cars.reduce((obj, car) => {
  if (!obj[car]) {
    obj[car] = 0;
  }
  obj[car]++;
  return obj;
}, {});
console.log(carsReduce);
