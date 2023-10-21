const sum = (a, b) => {
    return a + b
}

console.log(sum(14, 9))



const fromEuroToDollar = (euro) => {
 
    return (euro * 1.07);  // 1 dollar = 1.07 euros
}

const fromDollarToYen = (dollars) => {
    return (dollars * 149.86); // 1 dollar = 149.86 yen
}

const fromYenToPound = (yen) => {
    return(yen * 0.0055); // 1 yen = 0.0055 pounds
}

    console.log(fromDollarToYen(3.5)+" -- "+fromEuroToDollar(3.5)+" -- "+fromYenToPound(3.5))
    
    module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound, sum};
 