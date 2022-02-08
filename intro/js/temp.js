function sayHi(){
    console.log(`Hello`);
}

function hiBye(func){
    func();
    console.log("Bye");
}

return hiBye(sayHi);