


function swap(arr,xp, yp) 
{ 
    var temp = arr[xp]; 
    arr[xp] = arr[yp]; 
    arr[yp] = temp; 
} 
  
export async function selectionSort(arr) 
{ 
    var i, j, min_idx; 
  
    // One by one move boundary of unsorted subarray 
    for (i = 0; i < arr.length-1; i++) 
    { 
        // Find the minimum element in unsorted array 
        min_idx = i; 
        for (j = i + 1; j < arr.length; j++) 
        if (arr[j] < arr[min_idx]) 
            min_idx = j; 
  
        // Swap the found minimum element with the first element 
        swap(arr,min_idx, i); 
    } 

    return arr;
} 