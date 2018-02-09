class Hello{
    thing: string
    constructor(message: string){
        this.thing=message
    }
    getThing(addition:string){
        return ()=>this.thing+" "+addition
    }
}
let hello=new Hello("I am a fish...")
let button=document.createElement("Wow")
button.textContent="Wow!"
button.onclick=()=>{
    alert(hello.getThing("and I am going to eat you")())
}
document.body.appendChild(button)
