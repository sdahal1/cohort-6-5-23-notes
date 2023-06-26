/* 
TOP WAYS STUDENTS FAIL THE MOCK INTERVIEW FIRST TIME:

1. IF the function accepts a parameter, failiing to have that parameter in the function

2. If the function accepts a parameter, failing to use the parameter in the url properly

3. Failing to return the axios call and failing to return in the .then()

4. Thinking response is the data. Failing to use response.data properly

5. Syntax errors. To avoid these, first test the api endpoint in postman. Practice writing the code in a non-coding editor and then test it in vs code to see if syntax is right


*/

/*
Write a function called getFormattedCoinData that accepts a coin name. It should make a call to an api endpoint similar to this: https://api.coingecko.com/api/v3/coins/bitcoin

it should return a response that looks like this (depending on the coin)
{
    coinName: "Bitcoin",
    genesis_date: "2009-01-03",
    usd_price: 20681, (hint: you'll find the usd price under the market data property somewhere nested in there)
    ath_usd: 69045 (hint: you will also find the ath usd price in the market data property somewhere nested in there),
    price_change_percentage_24h: -0.93073
}

*/

const axios = require('axios');

function getFormattedCoinData(coinName){
    const url = `https://api.coingecko.com/api/v3/coins/${coinName}`
    return axios.get(url)
        .then((response)=>{
            const {data} = response;
            const result = {
                coinName: data.name,
                genesis_date: data.genesis_date,
                usd_price: data.market_data.current_price.usd, 
                ath_usd: data.market_data.ath.usd,
                price_change_percentage_24h: data.market_data.price_change_percentage_24h
            }
            console.log(result)
            return result
        })
        .catch((err)=>{
            console.log(err.message)
            return err.message
        })
}

getFormattedCoinData("ethereum")