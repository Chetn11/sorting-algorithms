

let n=50;
const array=[];



// ----------------------------------------------------------------------------------------


function swap(array,xp, yp) 
{ 
    var temp = array[xp]; 
    array[xp] = array[yp]; 
    array[yp] = temp; 
} 



// ----------------------------------------------------------------------------------------


// bubble sort
function bubble(array,type) {
 
    for (var i = 0; i < array.length; i++) {
 
        for (var j = 0; j < (array.length - i - 1); j++) {
 
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if(type==="desc"){
            if (array[j] < array[j + 1]) {
 
                // If the condition is true
                // then swap them
    
                swap(array,j,j+1);
            }
        }
        // for assscending order
        else{
            if (array[j] > array[j + 1]) {
                swap(array,j,j+1);
            }
        }
        }
    }
 
    showBars(array)
}

// ----------------------------------------------------------------------------------------


// selection sort

   function selectionSort(array,type) 
{ 
    var i, j, min_idx; 
  
 
    for (i = 0; i < array.length-1; i++) 
    { 
        // Find the minimum element in unsorted array 
        min_idx = i; 
        for (j = i + 1; j < array.length; j++) 

        if(type==="desc")
        {
            if (array[j] > array[min_idx]) {
                min_idx = j; 
            }
        }
        else{
            if (array[j] < array[min_idx]) {
                min_idx = j; 
            }
        }
        // Swap the found minimum element with the first element 
        swap(array,min_idx, i); 
    } 

    return showBars(array);
} 


// ----------------------------------------------------------------------------------------

// insertion sort

function insertionSort(array,type) {
    for(let i = 1; i < array.length; i++) {
        // key hold current element
        let key = array[i];

        // element before the key
        let j = i - 1;

        if(type==="desc"){
            while (j >= 0 && array[j] < key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
        }
        else{
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
        }
        
        array[j + 1] = key;
    }
    showBars(array);
}

// ----------------------------------------------------------------------------------------

// Quick sort

function partition(arr, st, ed) { 
    let pivot = arr[ed]; 
    let i = st - 1; 
  
    for (let j = st; j <= ed - 1; j++) { 
        // If current element is smaller than the pivot 
        
        if (arr[j] < pivot) { 
          
            i++; 
            // Swapping of elements 
            swap(arr,i,j);
        } 
        
    } 
    i++;
        swap(arr,i,ed);
    return i; 
   
  // Return the partition index 
} 
  
function quickSort(arr, st, ed) { 

    if(st>=ed) return;
    let index = partition(arr, st, ed); 
  
    quickSort(arr, st, index - 1); 
    quickSort(arr, index + 1, ed); 
    showBars(array)
} 


// --------------------------------------------------------------------------------------
// merge Sort
function mergeSort(arr,st,ed){
    if(st>=ed)  return;

    let mid=st+parseInt((ed-st)/2);
    mergeSort(arr,st,mid);
    mergeSort(arr,mid+1,ed);
    conquer(arr,st,mid,ed);
    showBars(array);

}

function conquer(arr,st,mid,ed){
    var n=(ed-st)+1;
    var temp=new Array(n);
    var i=st;
    var j=mid+1;
    var k=0;

    while(i<=mid && j<=ed)
    {
        if(arr[i]<=arr[j])
            {
                temp[k]=arr[i];
                i++;
                k++;
            }
            else
            {
                temp[k]=arr[j];
                j++;
                k++;
            }
    }
    while(i<=mid)
    {
        temp[k]=arr[i];
        i++;
        k++;
    }
    while(j<=ed)
    {
        temp[k]=arr[j];
        j++;
        k++;
    }
    for(let x=0, y=st; x<temp.length; x++,y++)
        {
            arr[y]=temp[x];
            
        }

}


// --------------------------------------------------------------------------------------

// creating array
function getArray(){
for(let i=0; i<n; i++){
    array[i]=Math.floor(Math.random() * 100)+1;
}
showBars()
}

window.addEventListener("load",function(){
    getArray();
    
})




// ----------------------------------------------------------------------------------------


const container=document.getElementById("container");
const container2=document.getElementById("container2");

function showBars(){
    container.innerHTML="";
    container2.innerHTML="";
for(let i=0; i<array.length; i++){
    
    const bar=document.createElement("div");
    //setting bar height equal to the value of array times 10 to get percent height of container
    bar.style.height=array[i]*10+"%";
    bar.style.width="20px";
    bar.style.backgroundColor="#aaaaff";
    
    const value=document.createElement("div");
    value.style.width="20px";
    const span=document.createElement("span");
    span.innerText=array[i];
    value.append(span);

    container.append(bar);
    container2.append(value);
    
}
}

// ----------------------------------------------------------------------------------------


// for random array
const ran=document.getElementById("random");
ran.addEventListener("click",(e)=>{
    e.preventDefault();
    getArray();
})



// ----------------------------------------------------------------------------------------



// for bubble sort
const bub=document.getElementById("bubble_asc");
bub.addEventListener("click", (e)=>{
    e.preventDefault();
    
     bubble(array);
    
})

const bub_d=document.getElementById("bubble_desc");
bub_d.addEventListener("click", (e)=>{
    e.preventDefault();
    
     bubble(array,"desc");
    
})

// ----------------------------------------------------------------------------------------

// for selection sort
const selection_asc=document.getElementById("selection_asc");
selection_asc.addEventListener("click",(e)=>{
    e.preventDefault();
    selectionSort(array);
})

const selection_desc=document.getElementById("selection_desc");
selection_desc.addEventListener("click",(e)=>{
    e.preventDefault();
    selectionSort(array,"desc");
})
// ----------------------------------------------------------------------------------------

// for insertion sort

const insertion_asc=document.getElementById("insertion_asc");
insertion_asc.addEventListener("click",(e)=>{
    e.preventDefault();
    insertionSort(array);
})

const insertion_desc=document.getElementById("insertion_desc");
insertion_desc.addEventListener("click",(e)=>{
    e.preventDefault();
    insertionSort(array,"desc");
})


// for Quick sort
const quick_asc=document.getElementById("quick_asc");
quick_asc.addEventListener("click",(e)=>{
    e.preventDefault();
    quickSort(array,0,array.length-1);
})


// for merge sort
const merge=document.getElementById("merge");
merge.addEventListener("click",(e)=>{
    e.preventDefault();
    mergeSort(array,0,array.length-1);
})