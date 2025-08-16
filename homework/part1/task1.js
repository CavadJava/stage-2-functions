// Part 1: String Methods
// Convert the string  pet  to uppercase.
//     Given:  let pet = "golden retriever";
// Expected Result:  "GOLDEN RETRIEVER"

let pet = "golden retriever"
console.log("BEFORE:", pet);
console.log("AFTER:", convertToUpperCase(pet));
function convertToUpperCase(str){
    return str.toUpperCase();
}