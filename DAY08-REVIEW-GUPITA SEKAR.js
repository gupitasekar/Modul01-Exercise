// Exercise 1
data = [
  {
    name: "Avanza",
    brand: "Toyota",
    machine: "DOHC",
    cc: 1500,
  },
  {
    name: "Supra",
    brand: "Toyota",
    machine: "V8",
    cc: 5000,
  },
  {
    name: "Ertiga",
    brand: "Suzuki",
    machine: "DOHC",
    cc: 1550,
  },
];

let print = (data) => {
  for (let i = 0; i < data.length; i++) {
    let result = `${i + 1}. ${data[i].brand} ${data[i].name} with ${
      data[i].machine
    } ${data[i].cc.toLocaleString("id")}`;
    console.log(result);
  }
};
// print(data);

// Exercise 2

let carType = (data, cbfn) => {
  if (!cbfn) {
    for (let i = 0; i < data.length; i++) {
      let result = `${i + 1}. ${data[i].brand} ${data[i].name} with ${
        data[i].machine
      } ${data[i].cc.toLocaleString("id")}`;
      console.log(result);
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (cbfn(data[i])) {
        let result = `${i + 1}. ${data[i].brand} ${data[i].name} with ${
          data[i].machine
        } ${data[i].cc.toLocaleString("id")}`;
        console.log(result);
      }
    }
  }
};

// carType(data, (obj) => obj.name == "Avanza");
carType(data);
