const n=50;
const array=[];




function bubble(array) {
 
    for (var i = 0; i < array.length; i++) {
 
        for (var j = 0; j < (array.length - i - 1); j++) {
 
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (array[j] > array[j + 1]) {
 
                // If the condition is true
                // then swap them
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
 
    showBars(array)
}

// creating array
function getArray(){
for(let i=0; i<n; i++){
    array[i]=Math.floor(Math.random() * 100)+1;
}
showBars()
}

// console.log(array);
const container=document.getElementById("container");
const container2=document.getElementById("container2");
function showBars(){
    container.innerHTML="";
for(let i=0; i<array.length; i++){
    
    const bar=document.createElement("div");
    //setting bar height equal to the value of array times 10 to get percent height of container
    bar.style.height=array[i]*10+"%";
    bar.style.width="20px";
    bar.style.backgroundColor="#aaaaff";
    container.append(bar);
    
}
}

// for random array
const ran=document.getElementById("random");
ran.addEventListener("click",(e)=>{
    e.preventDefault();
    getArray();
})

// for bubble sort
const bub=document.getElementById("bubble");
bub.addEventListener("click",(e)=>{
    e.preventDefault();
    bubble(array);
})

window.addEventListener("load",function(){
    getArray();
    
})