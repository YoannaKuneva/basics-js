// 15 зад.
function biggest ([num1, num2, num3]) {
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    console.log(Math.max(num1, num2, num3));
}

biggest(['-2', '67', '97']);
biggest(['12', '-1', '999']);
biggest(['5', '-910', '105']);
