//returneaza daca argumentul trimis este un number par sau impar:

const oddOrEven = (random) => {
  let number = random;
  if (number % 2 == 0) {
    console.log(number + "Even");
  } else {
    console.log(number + "odd");
  }
};
numbers = oddOrEven(10);

//primeste un numar necunoscut de parametrii de tip number care returneaza suma lor:

const sumCalc = (...numbers) => {
  let sum = 0;
  numbers.forEach((element) => {
    sum = sum + element;
  });
  const nec = sum(5, 10);
  console.log(SumCalc);
};
const necunoscut = sum(10, 10);

//Clonati obiectul person + Destructurare proprietatea name :

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};
const clonePerson = { ...person };

const { name } = person;
console.log(name);

//Destructurati color si doors :

const {
  settings1: { color, doors },
} = car;
console.log(color + doors);

//Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine:

const car = {
  name: "Toyota",
  settings: { color: "white", doors: 5 },
};

const clonecar = {
  ...car,
  modelYear: "2022",
  settings: { ...car.settings, wheels: "4", engine: "2,0L" },
};
const mergedcar = { ...car, ...clonecar };
console.log(mergedcar);
