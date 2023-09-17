function func(){
    let a = 1;
    return function func2(){console.log(a)}
}
let fun = func()
fun()
class c1{
    constructor(a){
        this.a=a
    }
    printA(){
        console.log(this.a)
    }
}
let c = new c1(2)
c.printA()