const product = {
  priceInCents: 2100,
  name: "Red Beanie",
  size: "L",
  onSale: true,
};

// BASIC IF STATEMENTS
function getPrice(product) {
  let price = product.priceInCents;
  if (product.onSale) {
    price = price * 0.9;
  }

  return price;
}
// console.log(getPrice(product)); //> 1890

// SINGLE LINE IF STATEMENTS- refactor the above function
function getPrice2(product) {
  let price = product.priceInCents;
  if (product.onSale) price = price * 0.9;

  return price;
}

// console.log(getPrice2(product)); //> 1890

// CONDITIONAL OPERATOR- refactor getPrice()
function getPrice3(product) {
  let price = product.priceInCents;
  // if (product.onSale) {
  //   price = price * 0.9;
  // } else{
  //   console.log("No discounts.")
  // }

  product.onSale
    ? price = price * 0.9
    : console.log("No discounts.")

  return price;
}

// console.log(getPrice3(product)); //> 1890

// CONDITIONAL OPERATOR WITH RETURNS - refactor getPrice()
function getPrice4(product) {
  let price = product.priceInCents;
  

  return (product.onSale)
    ? price * 0.9
    : price

}

// console.log(getPrice4(product)); //> 1890


// MULTIPLE CONDITIONAL IF-ELSE STATEMENTS
function calculateTax(state){
  let result;
  if (stateAbbreviation === "CA") {
    result = 0.0725;
  } else if (stateAbbreviation === "CO") {
    result = 0.029;
  } else if (stateAbbreviation === "GA") {
    result = 0.04;
  } else if (stateAbbreviation === "VT") {
    result = 0.06;
  } else {
    result = 0;
  }
  return result;
}


// SWITCH STATEMENTS -> refactor calculateTax()
function calculateTax2(state){
  let result;
  // if (state === "CA") {
  //   result = 0.0725;
  // } else if (state === "CO") {
  //   result = 0.029;
  // } else if (state === "GA") {
  //   result = 0.04;
  // } else if (state === "VT") {
  //   result = 0.06;
  // } else {
  //   result = 0;
  // }
  switch(state){
    case("CA"):{
      result = 0.0725;
      break;
    }
    case("CO"):{
      result = 0.029;
      break;
    }
    case("GA"):{
      result = 0.04;
      break;
    }
    case("VT"):{
      result = 0.06;
      break;
    }
    default:{
      result = 0;
    }
  }
  return result;
}

console.log(calculateTax2("FL"))


// console.log([1,4,8].includes(8))