let input = document.querySelector("#insertNumber");

let startCountdown = document.querySelector("#startCountdown");
let stopCountdown = document.querySelector("#stopCountdown");
let restart = document.querySelector("#restart");
let counter;
let interval;

startCountdown.addEventListener('click', () => {
    counter = Number(input.value);

    clearInterval(interval);

    interval = setInterval( ()=>{
    
        
        input.value = counter;

        if(counter === 0){
            clearInterval(interval);
        }
        
        counter--

        } , 1000);
    
})


stopCountdown.addEventListener('click', ()=> {
   clearInterval(interval);
})


restart.addEventListener('click', ()=>{
    clearInterval(interval);
    input.value = "";
    console.log(counter);
})