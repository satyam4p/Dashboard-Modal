

export const QuickSort=async (ChartReference)=>{
    console.log("chart ref in quick:: ",ChartReference);
    const chart = ChartReference.current.chartInstance;
    const dataValue = chart.config.data.datasets[0].data;
    console.log("dataValue:: ",dataValue,"chart ref::  ",chart);
    let colors = chart.config.data.datasets[0].backgroundColor;
    let meta = chart.getDatasetMeta(0);
    console.log("background color:: ",colors,"meta data:: ",meta);
    await quickSortHelper(dataValue,0,dataValue.length-1,colors,meta,chart);
    console.log("sorted result:: ",dataValue);
}

const quickSortHelper=  async (array,startIdx,endIdx,colors,meta,chart)=>{
    return new Promise( async (resolve, reject)=>{
        if(chart !== undefined){
            if(startIdx >= endIdx) return;
            let pivotIdx = startIdx;
            colors[pivotIdx] = '#751280';
            chart.data.datasets[0].backgroundColor = colors;
            chart.update();
            await sleep(1000);
            let leftIdx = startIdx+1;
            let rightIdx = endIdx;
            while(rightIdx >= leftIdx){
                if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
                    swap(leftIdx,rightIdx,array,meta);
                } 
                if(array[leftIdx] <= array[pivotIdx]) leftIdx++;
                if(array[rightIdx] >= array[pivotIdx]) rightIdx--;
            }
            swap(rightIdx,pivotIdx,array,meta);
            chart.update();
            console.log("chart object data:: ",chart.config.data.datasets[0].data," array value:: ",array);
            const leftSubArrayIsSmaller = rightIdx - 1 - startIdx < endIdx -  (rightIdx + 1);
            if(leftSubArrayIsSmaller){
                quickSortHelper(array, startIdx, rightIdx -1,colors,meta,chart);
                chart.update();
                quickSortHelper(array, rightIdx + 1, endIdx,colors,meta,chart );
                chart.update();
            }else{
                quickSortHelper(array, rightIdx + 1, endIdx,colors,meta,chart );
                chart.update();
                quickSortHelper(array, startIdx, rightIdx - 1,colors,meta,chart);
                chart.update();
            }
        }else{
            console.log("chart object :: ",chart);
            reject("some problem with chart object");
        }
    });
    
}
const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const swap =(leftIdx,rightIdx,array,meta)=>{
    return new Promise((resolve,reject)=>{
        if(meta !== undefined){
            let temp = array[rightIdx];
        array[rightIdx] = array[leftIdx];
        array[leftIdx] = temp;
        let temp1 = meta.data[rightIdx];
        meta.data[rightIdx] = meta.data[leftIdx];
        meta.data[leftIdx] = temp1;
        resolve();
        }
        else{
            console.log("meta value:: ",meta);
            reject("some trouble with meta object");
        }
        
    });
   

}