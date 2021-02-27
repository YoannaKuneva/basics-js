// 2 зад.
function calSumAndVat(arr) {
    let sum = 0;
    for (let price of arr){
        sum += Number(price);
    }
    console.log({sum});

    let vat = sum * 0.2;
    console.log({vat});

    let total = sum + vat;
    console.log({total});
}

calSumAndVat(['1.50', '2.70', '3.00']);
