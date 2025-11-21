function camelize(string){
    stringArray = string.split("-");
    for(let i = 0; i < stringArray.length; i++){
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
    string = stringArray.join("");
    console.log(string);
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");