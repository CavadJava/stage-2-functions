// 1.Add an Item to an Array
// Add the dessert "Cake" to the desserts array.
//     Given: let desserts = ["Ice Cream", "Pie", "Pudding"];
// Expected Result: ["Ice Cream", "Pie", "Pudding", "Cake"]


let desserts = ["Ice Cream", "Pie", "Pudding"];
// desserts.push("Cake");
// console.log(desserts);

addItemToArray(desserts, "Cake");
console.log(desserts);
function addItemToArray(array, item) {
    array.push(item);
}