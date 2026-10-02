const throttle = (func,delay)=>{
let lastCall = 0;
return function (...args){
    const now = Date.now()
    if(now-lastCall < delay){
        return
    }
    lastCall = now;
    return func(...args)
}
}

function chatmssg(mssg){
    console.log("sending message", mssg);
}
const throttleSlowMode = throttle(chatmssg,2* 1000)

throttleSlowMode('Hi')
throttleSlowMode('Hi....')
setTimeout(() => {
    throttleSlowMode('Hi-hi.....')    
}, 3000);
