//returneaza daca argumentul trimis este un number par sau impar:

const oddOrEven = (random) => {
  let number = random;
  if (number % 2 == 0) {
    console.log("Numarul" + " " + number + " " + "este par!");
  } else {
    console.log("Numarul" + " " + number + " " + "este impar!");
  }
};
numbers = oddOrEven(10);

//primeste un numar necunoscut de parametrii de tip number care returneaza suma lor:

const sum = (par1, par2) => {
  const num1 = par1;
  const num2 = par2;

  console.log(num1 + num2);
};
const necunoscut = sum(10, 10);

//Clonati obiectul person + Destructurare proprietatea name :

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};
const clonePerson = { ...person }; //Clonare

const { name } = person;
console.log(name); //Destructurare

//Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine:

const car = {
  name: "Toyota",
  settings: { color: "white", doors: 5 },
};

const clonecar = {
  ...car,
  modelYear: "2022",
  settings: { wheels: "4", engine: "2,0L" },
};
const mergedcar = { ...car, ...clonecar };
console.log(mergedcar); //nu sunt sigur daca functioneaza corect!!

//Destructurati color si doors :

const {
  settings: { color, doors },
} = car;
console.log(
  "The car is " + color + " " + "and it has" + " " + doors + " " + "doors "
);
