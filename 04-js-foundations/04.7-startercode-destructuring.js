/* 
Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. Some of the key benefits of destructuring in JavaScript are:
*/

const product = {
  title: "The Golden Compass",
  priceInCents: 799,
  author: {
    firstName: "Philip",
    surname: "Pullman",
  },
};

// - EXAMPLE WITHOUT DESTRUCTURING

function printAuthorAndTitle(product) {
    return `${product.title} by ${product.author.firstName} ${product.author.surname}`;
}

// console.log(printAuthorAndTitle(product))


// - EXAMPLE WITHOUT DESTRUCTURING BUT USING VARIABLES INSTEAD
function printAuthorAndTitle2(product) {
  const author = product.author;
  const title = product.title;

  return `${title} by ${author.firstName} ${author.surname}`;
}

// - EXAMPLE WITH DESTRUCTURING

function printAuthorAndTitle3(product) {
  const {title, author, priceInCents, tax} = product;
  return `${title} by ${author.firstName} ${author.surname}`;
}




// - WHAT HAPPENS IF THERE IS MISSING KEYS? - variable will be undefined



// - DESTRUCTURING A NESTED OBJECT WITH NESTED KEYS
function printAuthorAndTitle4(product) {
  const {title, author:{firstName,surname}} = product;
  
  return `${title} by ${firstName} ${surname}`;
}

// console.log(printAuthorAndTitle4(product))


// - RENAMING A DESTRUCTURED VARIABLE TO BE DIFFERENT FROM THE KEY NAME
function printAuthorAndTitle5(product) {
  const {title:bookTitle, author:{firstName:nombre,surname}} = product;
  
  return `${bookTitle} by ${nombre} ${nombre}`;
}

// console.log(printAuthorAndTitle5(product))


// - DESTRUCTURING ARRAYS

const genres = [
  "Fantasy",
  "Fiction",
  "Nonfiction",
  "Science Fiction",
  "Young Adult",
];

// console.log(`My fav genres are ${genres[4]}, ${genres[2]} and ${genres[0]}`)

const [,,,x,y] = genres;
// console.log(x,y)


// - THE REST OPERATOR ON OBJECTS
const {title, ...everythingElse} = product;

// console.log(title)
// console.log(everythingElse)

// - THE REST OPERATOR ON ARRAYS
const [,a, ...otherElements] = genres;

// console.log(otherElements)

// - DESTRUCTURING PARAMETERS


function printAuthorAndTitle6({title, author:{firstName,surname}}) {
  // const {title, author:{firstName,surname}} = product;
  return `${title} by ${firstName} ${surname}`;
}


// console.log(printAuthorAndTitle6(product))


const advancedProduct = {
  name: "Geometric Print Swim Shorts",
  colors: {
    pink: {
      priceInCents: 1499,
      availableSizes: ["XS", "S", "M", "XL"],
    },
    blue: {
      priceInCents: 999,
      availableSizes: ["M", "L", "XL"],
    },
  },
};


const {name, colors:{pink:{availableSizes:[,,medium]}} } = advancedProduct

console.log(name, medium)