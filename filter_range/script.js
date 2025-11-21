function filterRange(array, a, b){
    return array
    .filter((num) => num >= a && num <= b);
}


let array = [5, 3, 8, 1]
console.log(filterRange(array, 1, 4))
console.log(array)