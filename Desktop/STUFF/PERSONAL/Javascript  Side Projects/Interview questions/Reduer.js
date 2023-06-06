const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4 , 3.7];

const total = array.reduce((prevalue, currentvalue) => {
    const sum = prevalue + currentvalue
    return sum;
},0)


console.log(total)



const mul = array.reduce((prevalue, currentvalue) => {
    const multiplication = prevalue * currentvalue
    return multiplication
}, 1)

console.log(mul)


const seg = arr.reduce((prevalue, currentvalue) => {
    const florred = Math.floor(currentvalue)


    if (!prevalue[florred]) {
        prevalue[florred] = []
    }
    prevalue[florred].push(currentvalue)
    return prevalue
    


},{})


console.log(seg)