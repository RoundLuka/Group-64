// let myArr = ["AB", "CD", "ED"]

// map, filter, forEach, reduce

// let newArr = myArr.map((value, index, arr) => value + "#" + index)

// let filteredArr = myArr.filter((string, index) => index % 2 === 0)
// console.log(filteredArr)

// myArr.forEach((element) => element * 2)

// const fruits = ['apple', 'banana', 'orange'];
// fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

let numbersArr = [12, 15, 17, 12, 15, 36, 23, 6,2, 6]


// numbersArr.reduce((sum, num) => {
//     sum+=num;
// })
// arr.map()




const manualMap = (arr, callback) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        let newValue = callback(currentValue, i, arr);
        result.push(newValue)
    }
    return result
};

// console.log(manualMap(numbersArr, (val) => val * 2))

const manualFilter = (arr, callback) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        if (callback(currentValue, i, arr)) {
            result.push(currentValue)
        }
    }
    return result
};

// console.log(manualFilter(numbersArr, (num) => num % 2 === 0))

const manualForEach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        callback(currentValue, i, arr);
    }
};

// manualForEach(numbersArr, (num) => console.log(num))

const manualReduce = (arr, accumulator, callback) => {

    for(let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        let newValue = callback(currentValue, i, arr);
        accumulator += newValue
    }
    return accumulator
};

