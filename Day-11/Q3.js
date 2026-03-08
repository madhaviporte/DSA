//Second max element from array

let arr = [50,20,68,56,59,85]
let max = arr[0]

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}