let counterEl=document.getElementById("counter");

function increment(){
    let previousCounterValue=counterEl.textContent;
    let updatedCounterValue=parseInt(previousCounterValue)+1;
    counterEl.textContent=updatedCounterValue;
    if(updatedCounterValue>0){
        counterEl.style.color="green";
    }
    else if(updatedCounterValue<0){
        counterEl.style.color="red";
    }
    else{
        counterEl.style.color="black"
    }
}
function decrement(){
    let previousCounterValue=counterEl.textContent;
    let updatedCounterValue=parseInt(previousCounterValue)-1;
    counterEl.textContent=updatedCounterValue
    if(updatedCounterValue>0){
        counterEl.style.color="green";
    }
    else if(updatedCounterValue<0){
        counterEl.style.color="red";
    }
    else{
        counterEl.style.color="black"
    }
}
function reset(){
    counterEl.textContent=0
    counterEl.style.color="black"
}