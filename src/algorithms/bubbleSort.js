
export const BubbleSort =(array)=>{
    console.log("input array: ",array);
    let isSorted = false;
    let counter =0;
    while(!isSorted){
        isSorted =true;
        for(let i=0;i<array.length - 1 - counter; i++){
            if(array[i] > array[i+1]){
                swap(i,i+1,array);
                isSorted = false;
            }
        }
        counter++;
    }
    return array;
}
const swap =(idx1,idx2,array)=>{
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}