function sumArray() {
    var sum = 0;
    array = [10,6,3,4];
    min = array.reduce((x,y) => Math.min(x,y));
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] > min) {
            sum += array[i]
            }
        else console.log(sum);   }    
    }
sumArray();

function sumArray2() {
    var sum = 0;
    aray = [4,1,0,3,9];
    for (let i = 0; i < aray.length-1; i++) {
    if (aray[i] === 0) {
        for (let t = i; t < aray.length; t++) {
        sum += aray[t]
        }
    }
}
    console.log(sum);    
}
sumArray2();

function sumArray3() {
    var sum = 0;
    atay = [2,0,3,0,1,5];
    for (let o = 0; o < atay.length-1; o++) {
        if (atay[o] === 0) {
            for (let i = o + 1; i < atay.length; i++) {
               if (atay[i] === 0) {
                for (let t = i; t < atay.length; t++) {
                sum += atay[t]
        }
    }
}
        }
    } 
    console.log(sum);    
}
sumArray3();

function matricha() {
    let d3 = 0;
    let matrix = [
        [1,2,3],// 0
        [4,5,6],// 1
        [7,8,9] // 2
    ];// 0 1 2
    let d1 = matrix[0][0];
    let d5 = matrix[2][2];
    let d2 = matrix[1][0]; + matrix[0][1];
    let d4 = matrix[2][1]; + matrix[1][2];
    let elements = [];
    for (let i = 0; i < matrix.length; i++) {
        let elem = matrix[i][matrix.length - 1 - i];
        elements.push(elem);
        d3 += elem;
    }
    console.log(elements);
    console.log(d1,d2,d3,d4,d5);  
    console.log(Math.max(d1,d2,d3,d4,d5)) 
}
matricha();
