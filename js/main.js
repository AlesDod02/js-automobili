let cars = [
    {
        make: "bmw",
        model: "x1",
        fuel: "diesel",
    },
    {
        make: "bmw",
        model: "x2",
        fuel: "benzina",
    },
    {
        make: "bmw",
        model: "x3",
        fuel: "gpl",
    },
    {
        make: "bmw",
        model: "x4",
        fuel: "elettrica",
    },
    {
        make: "bmw",
        model: "x5",
        fuel: "benzina",
    },
    {
        make: "bmw",
        model: "x6",
        fuel: "diesel",
    },
    {
        make: "bmw",
        model: "x7",
        fuel: "ibrida",
    },
    {
        make: "bmw",
        model: "x8",
        fuel: "diesel",
    },
    {
        make: "bmw",
        model: "x9",
        fuel: "gpl",
    },
    {
        make: "bmw",
        model: "x10",
        fuel: "benzina",
    }
]
console.log(cars);


let carsBenzina = [];


let carsDiesel = [];


let otherCars = [];

cars.forEach(function (car) {

    if (car.fuel == "diesel") {
        carsDiesel.push(car);
    }
    else if (car.fuel == "benzina") {
        carsBenzina.push(car);
    }
    else {
        otherCars.push(car)

    }


});
for (let i = 0; i < carsBenzina.length; i++) {
    document.getElementById("benzina").innerHTML += `
    <div class ="col-3">
    <div class="card " >
    <div class="card-body">
    <h5 class="card-title">Auto</h5>
    <h6 class="card-subtitle mb-2 text-muted">produttore:${carsBenzina[i].make}</h6>
    <p class="card-text">modello:${carsBenzina[i].model}</p>
    <pclass="card-text">carburante:${carsBenzina[i].fuel}</p>
    
  </div></div></div>
  `






}

//document.getElementById("benzina").innerHTML= benzina
//document.getElementById("otherfuel").innerHTML= otherFuel
console.log(carsBenzina);
console.log(carsDiesel);
console.log(otherCars)