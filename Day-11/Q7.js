//All zeros to left and all ones to right 

let arr = [1,1,0,0,0,0,1,1,0,1,0,1,0]
let i =0 , j=0
while(i<arr.length){
    if(arr[i]==0){
        arr[i]=arr[j]
        j++
    }
    i++
}