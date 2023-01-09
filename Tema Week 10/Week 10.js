//Creati cate 2 exemple pentru mostenire si
//compozitie folosindu-va de domeniul vostru de activitate sau unul preferat.
//(puteti folosi orice referinta).

const ex1 = () => {
  function Vag() {
    this.type = "";
    this.manufacter = "";
    this.model = null;
    this.sport = null;
  }

  function Pkw(details) {
    Vag.call(this);
    const { type, manufacter, model, sport } = details;
    this.type = type;
    this.manufacter = manufacter;
    this.model = model;
    this.sport = sport;
  }

  function Lkw(details) {
    Vag.call(this);
    const { type, manufacter, model } = details;
    this.type = type;
    this.manufacter = manufacter;
    this.model = model;
  }

  Pkw.prototype = Object.create(Vag.prototype);
  Lkw.prototype = Object.create(Vag.prototype);

  function group(...args) {
    this.groupCars = args;
  }

  var brand1 = new Pkw({
    type: "Pkw",
    manufacter: "Audi",
    model: "A1, A2, A3, A4, A5, A6, A7, A8, ",
    sport:
      "S3, S4, S5, S6, S7, S8, TTS, SQ2, SQ5, SQ7, SQ8, e-tron GT RS, TT RS, RS3, RS4, RS5, RS6, RS7, RSQ3, RSQ8",
  });

  var brand2 = new Pkw({
    type: "Pkw",
    manufacter: "Bentley Motors Limited",
    model:
      "Azure, Arnage,  Bentayaga, Brooklands, Continental, Contonental GT, Eight, Flying Spur, Mark V ",
  });

  var brand3 = new Pkw({
    type: "Pkw",
    manufacter: "Porsche AG",
    model:
      "911 Series, 930, 964, 993, 996, 997, 991, 992, 912, 914, 918, Boxster Series, Carrera GT, Cayman Series, Cayenne, Macan, Panamera, Taycan ",
    sport: "All of them!!!",
  });

  var brand4 = new Pkw({
    type: "Pkw",
    manufacter: "Seat",
    model:
      "Marbella, Arosa, Mii, Ibiza, Arona, Terra, Inca, Cordoba, Leon, Born, Altea, Malaga, Toledo, Exeo, Alhambra, Ateca, Tarraco, Cupra Fromentor",
    sport: "Cupra Models",
  });

  var brand5 = new Pkw({
    type: "Pkw",
    manufacter: "Skoda",
    model:
      "Felicia, Octavia, Fabia, Superb, Roomster, Yeti, Rapid, Citigo, Kodiaq, Karoq, Kamiq, Scala, Enyak, Kushaq",
    sport: "RS Models",
  });

  var brand6 = new Lkw({
    type: "Lkw",
    manufacter: "MAN Truck & Bus",
    model:
      "LE L2000ME M2000 evolution ,FE F2000, CLA, TGL, TGM, TGA, TGX, TGS, HX, LX, FX, SX ",
    sport: "None",
  });

  var brand7 = new Lkw({
    type: "Lkw",
    manufacter: "IC Bus",
    model: "AE AC Series, BE Series, CE Series, FE Series, RC Series",
    sport: "None",
  });

  var brand8 = new Lkw({
    type: "Lkw",
    manufacter: "Scania AB",
    model: "L-Series, P-Series, G-Series, R-Series, S-Series",
    sport: "None",
  });

  var brand9 = new Lkw({
    type: "Lkw",
    manufacter: "Volkswagen Truck & Bus",
    model: "L80, Titan, Worker, VolksBus-Series",
  });

  const pkws = { brand1, brand2, brand3, brand4, brand5 };
  const lkws = { brand6, brand7, brand8, brand9 };
  const myCars = new group(pkws, lkws);
  console.log(myCars);
};

ex1();

const ex2 = () => {
  function F1(details) {
    this.Constructor = "";
    this.Car = "";
    this.Motor = "";
  }

  function Teams(details) {
    F1.call(this);
    const { Constructor, Car, Motor, Base } = details;
    this.Constructor = Constructor;
    this.Car = Car;
    this.Motor = Motor;
    this.Base = Base;
  }
  Teams.prototype = Object.create(F1.prototype);

  var team1 = new Teams({
    Constructor: "Alfa Romeo",
    Car: "Alfa Romeo",
    Motor: "Ferrari",
    Base: "Hinwil,Switzerland",
  });

  var team2 = new Teams({
    Constructor: "Aston Martin",
    Car: "Aston Martin",
    Motor: "Mercedes",
    Base: "Silverstone UK",
  });
  var team3 = new Teams({
    Constructor: "AlphaTauri",
    Car: "AT03",
    Motor: "Red Bull Powertrains",
    Base: "Faenza,Italy",
  });
  var team4 = new Teams({
    Constructor: "Alpine",
    Car: "A552",
    Motor: "Renault",
    Base: "Enstone UK",
  });
  var team5 = new Teams({
    Constructor: "Ferrari",
    Car: "F1-75",
    Motor: "Ferrari",
    Base: "Maranello,Italy",
  });
  var team6 = new Teams({
    Constructor: "Haas",
    Car: "VF-22",
    Motor: "Ferrari",
    Base: "Kannapolis US",
  });
  var team7 = new Teams({
    Constructor: "Mclaren",
    Car: "MCL36",
    Motor: "Mercedes",
    Base: "Woking, UK",
  });
  var team8 = new Teams({
    Constructor: "Mercedes",
    Car: "W13",
    Motor: "Mercedes",
    Base: "Brackley, UK",
  });
  var team9 = new Teams({
    Constructor: "Williams Racing",
    Car: "FW44",
    Motor: "Mercedes",
    Base: "Grove, UK",
  });
  var team10 = new Teams({
    Constructor: "Red Bull",
    Car: "RB18",
    Motor: "Red Bull Powertrains",
    Base: "Milton Keynes, UK",
  });

  function Drivers(details) {
    F1.call(this);
    const { Nationality, Podiums, Driver, Constructor } = details;
    this.Nationality = Nationality;
    this.Podiums = Podiums;
    this.Driver = Driver;
    this.Constructor = Constructor;
  }
  Drivers.prototype = Object.assign(Drivers.prototype, F1.prototype);

  var driver1 = new Drivers({
    Driver: "Max Verstappen",
    Nationality: "Netherlands",
    Podiums: 76,
  });
  var driver2 = new Drivers({
    Driver: "Lewis Hamilton",
    Nationality: "UK",
    Podiums: 190,
  });
  var driver3 = new Drivers({
    Driver: "Perez",
    Nationality: "Mexico",
    Podiums: 25,
  });
  var driver4 = new Drivers({
    Driver: "Carlos Sainz",
    Nationality: "Spain",
    Podiums: 14,
  });
  var driver5 = new Drivers({
    Driver: "Charles Leclerc",
    Nationality: "Monaco",
    Podiums: 23,
  });
  var driver6 = new Drivers({
    Driver: "George Russel",
    Nationality: "UK",
    Podiums: 8,
  });
  var driver7 = new Drivers({
    Driver: "Lando Norris",
    Nationality: "UK",
    Podiums: 6,
  });
  var driver8 = new Drivers({
    Driver: "Esteban Ocon",
    Nationality: "France",
    Podiums: 2,
  });
  var driver9 = new Drivers({
    Driver: "Fernando ALonso",
    Nationality: "Spain",
    Podiums: 98,
  });
  var driver10 = new Drivers({
    Driver: "Valtteri Bottas",
    Nationality: "Finland",
    Podiums: 67,
  });
  function group(...args) {
    this.groupCars = args;
  }
  const teams = {
    team1,
    team2,
    team3,
    team4,
    team5,
    team6,
    team7,
    team8,
    team9,
    team10,
  };
  const drivers = {
    driver1,
    driver2,
    driver3,
    driver4,
    driver5,
    driver6,
    driver7,
    driver8,
    driver9,
    driver10,
  };
  const f1 = new group(teams, drivers);
  console.log(f1);
};

ex2();

//cate o functie care primeste cate un parametru: integer, string, object, array, callback

const integer = (a, b) => {
  return a + b;
};
console.log(integer(5, 5));

const string = (x) => {
  return x;
};
console.log(string("Nagy"));
console.log(string("Denis"));

const object = (obj) => {
  return obj;
};
console.log(object({ Name: "Nagy Denis", Age: "29" }));

const array = (arr) => {
  return arr;
};
console.log(array([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Callback
const persons = ["Alex", "James", "Andreea"];

persons.forEach((names) => console.log(names));

//o functie care accepta un numar nedefinit de argumente care returneaza suma lor

function sum() {
  var s = 0;
  for (var i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}
console.log(sum(5, 5));
console.log(sum(2, 1));
console.log(sum());

//o functie care accepta un boolean si retuneaza un promise,
//resolve  cu o valoare daca booleanul este true si rejected daca este false cu alta valoare,
//prindeti ce returneaza functia si afisati cu console.log valoarea

let promise = new Promise((resolve, reject) => {
  let engineRunning = true;

  if (engineRunning == true) {
    resolve("The Engine is Running ");
  } else {
    reject("The engine is not Running ");
  }
});
promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
