// 10 зад.
function cone([radius, height]) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    console.log(volume);
    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let B = Math.PI * radius * s;
    let S = Math.PI * radius * radius
    let area = S + B;
    console.log(area);
}

cone (['3', '5']); // volume = 47.1238898038469; area = 83.22976079115259
cone (['7', '2.5']); // volume = 128.28170002158322; area = 317.3990033010781
cone (['11', '25']); // volume = 3167.7725923697085; area = 1324.0022523180737
