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
    <h5 class="card-title text-center">Auto</h5>
    <h6 class="card-subtitle text-center mb-2 text-muted">${carsBenzina[i].make}</h6>
    <p class="card-text text-center">${carsBenzina[i].model}</p>
    <p class="card-text text-center">${carsBenzina[i].fuel}</p>
    
  </div></div></div>
  `
};
for (let i = 0; i < carsDiesel.length; i++) {
    document.getElementById("diesel").innerHTML += `
    <div class ="col-3">
    <div class="card " >
    <div class="card-body">
    <h5 class="card-title text-center">Auto</h5>
    <h6 class="card-subtitle text-center mb-2 text-muted">${carsDiesel[i].make}</h6>
    <p class="card-text text-center">${carsDiesel[i].model}</p>
    <p class="card-text text-center">${carsDiesel[i].fuel}</p>
    
  </div></div></div>
  `
}
for (let i = 0; i < otherCars.length; i++) {
    document.getElementById("altri").innerHTML += `
    <div class ="col-3">
    <div class="card " >
    <div class="card-body">
    <h5 class="card-title text-center">Auto</h5>
    <h6 class="card-subtitle text-center mb-2 text-muted">${otherCars[i].make}</h6>
    <p class="card-text text-center">${otherCars[i].model}</p>
    <p class="card-text text-center">${otherCars[i].fuel}</p>
    
  </div></div></div>
  `
}
function addCar(event) {
    event.preventDefault();

    console.log("AGGIUNTO UNO macchina!");

    let newMake = document.getElementById("make").value;
    let newModel = document.getElementById("model").value;
    let newFuel = document.getElementById("fuel").value;


    


    let newcar = {
        make: newMake,
        model: newModel,
        fuel: newFuel,
        
    };

   cars.push(newcar);

    
    

}

//document.getElementById("benzina").innerHTML= benzina
//document.getElementById("otherfuel").innerHTML= otherFuel
console.log(carsBenzina);
console.log(carsDiesel);
console.log(otherCars)