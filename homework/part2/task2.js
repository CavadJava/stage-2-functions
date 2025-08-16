// 2.Check if an Array Includes an Item
// a.Check if the cities array includes "Paris"
// b.Given: let cities = ["London", "New York", "Tokyo"];
// c.Expected Result: false


let cities = ["London", "New York", "Tokyo"];
var result = findCity(cities, "Paris");
console.log(result);
function findCity(cities, city) {
    return cities.includes(city);
}