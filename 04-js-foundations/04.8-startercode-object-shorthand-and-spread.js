/* 
Object shorthand: 
JavaScript syntax that supports the creation of objects using values stored in variables, where the variable name becomes the key and the stored value becomes the value in the key-value pair

*/


const title = "The Presence Process";
const author = "Michael Brown";
// CREATE AN OBJECT USING THOSE VARIABLES AS KEYS AND THEIR VALUES AS VALUES- NAME IT "PRODUCT"
// const product = {
//   title: title,
//   author: author
// }

//OBJECT SHORTHAND- EXAMPLE:
const product = {
  title,
  author
}

// console.log(product)





//THE SPREAD OPERATOR-> USE IT TO MAKE A COPY OF AN OBJECT OR ARRAY

//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO ARRAYS INTO ONE
const ownedBooks = ["Infernal Devices", "Foundation", "Food"];
const wishlist = ["Good Omens", "Guards! Guards!"];


const combined = [...ownedBooks, ...wishlist]
// console.log(combined)

//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO OBJECTS INTO ONE
const salesTax = { state: "Washington", tax: 0.065, title: "tax title" };
//combine salesTax with the product variable from above


const combinedObjects = {...product, ...salesTax, tax: 0.5}

console.log(combinedObjects)

//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO OBJECTS INTO ONE AND OVERWRITE ONE OF THE EXISTING KEYS 


