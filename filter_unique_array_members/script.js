function unique(arr){
    let set = new Set(arr);
    return Array.from(set);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", ":-o"]
alert(unique(strings))