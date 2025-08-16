// 3.Combine Two Arrays
// a.Combine the cars array with the trucks array.
//     b.Given:
// c.let cars = ["Sedan", "Coupe"];
// d.let trucks = ["Pickup", "SUV"];
// e.Expected Result: ["Sedan", "Coupe", "Pickup", "SUV"]



let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];
combineArrays(cars, trucks);
combineArraysV2(cars, trucks);
combineArraysV3(cars, trucks);

function combineArrays(cars, trucks){
    var result = [];
    for(var c of cars){
        result.push(c);
    }
    for(var t of trucks){
        result.push(t);
    }
    console.log("version 1:",result);
}

function combineArraysV2(cars, trucks){
    var result = [];
    result.push(cars,trucks);
    console.log("version 2:",result.flat());
}


function combineArraysV3(cars, trucks){
    var result = [cars,trucks].flat();
    console.log("version 3:",result);
}