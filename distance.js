// 13 зад.
function distanceTime([speed1, speed2, timeInSeconds]) {
    [speed1, speed2, timeInSeconds] = [speed1, speed2, timeInSeconds].map(Number);
    // S = V * T;
    let S1 = ([speed1] * 1000 / 3600) * [timeInSeconds];
    let S2 = ([speed2] * 1000 / 3600) * [timeInSeconds];
	let distance = S1 - S2;
    
    console.log('Разстоянието между двата обекта е: ' + distance + ' метра.');
}

distanceTime(['50', '20', '7200']);
distanceTime(['70', '30', '3600']);
