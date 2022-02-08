function sayHi(){
    console.log(`Hi`)
}

function hiAndBye(func){
    func()
}

hiAndBye( ()=> {
    console.log(`greeting`)
})

hiAndBye(sayHi);