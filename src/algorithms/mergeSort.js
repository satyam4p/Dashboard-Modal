import React,{useState} from 'react';

export const MergeSort=(reference)=>{
    console.log("reference in algo:: ",reference);
    var chart = reference.current.chartInstance;
    var data = chart.config.data.datasets[0].data;
    var backgroundColor = chart.config.data.datasets[0].backgroundColor;
    const meta = chart.getDatasetMeta(0);
    console.log("data:: ",data,"bacgroundColor:: ",backgroundColor);

    const auxArray = data.slice();
    mergeSortAlgo(data, 0, data.length-1,auxArray,backgroundColor,meta,chart);
     console.log("data after sorting:: ",data);
}

const mergeSortAlgo = (mainArray,startIndex,endIndex,auxArray,backgroundColor,meta,chart)=>{
    if(startIndex === endIndex) return;
    
    const middleIndex = Math.floor((startIndex + endIndex)/2);

        mergeSortAlgo(auxArray,startIndex,middleIndex,mainArray,backgroundColor,meta,chart);
        
        mergeSortAlgo(auxArray,middleIndex+1,endIndex,mainArray,backgroundColor,meta,chart);
        // chart.update();
        doMerge(mainArray,startIndex,middleIndex,endIndex,auxArray,backgroundColor,meta,chart);
         
        }
     
     
    

const doMerge = async (mainArray,startIndex,middleIndex,endIndex,auxArray,backgroundColor,meta,chart)=>{
    return new Promise((resolve,reject)=>{
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex+1;
    backgroundColor[k] = "#261e1a";
    while(i <= middleIndex && j <= endIndex){

        if(auxArray[i] <= auxArray[j]){
            mainArray[k++] = auxArray[i++];
            chart.update();
        }
        else{
            mainArray[k++] = auxArray[j++];
            chart.update();
        }
        
    }
    while(i <= middleIndex){
        mainArray[k++] = auxArray[i++];
        chart.update();
    }
    while(j <= endIndex){
        mainArray[k++] = auxArray[j++];
        chart.update();
    }
    resolve();
    
    });
    
}

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
