// 12 зад.
function simpleNumber(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            count++;
            break;
        }
    }
    if (count == 0) console.log("Просто число");
    else console.log("Числото не е просто");
}

simpleNumber(2);
simpleNumber(7);
simpleNumber(8);
simpleNumber(24);
simpleNumber(13);
