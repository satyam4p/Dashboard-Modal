
export const BubbleSort = async reference =>{
    /*accesssing chart instance */
    let chart = reference.current.chartInstance;
    /* access the data array */
    const dataArray = chart.data.datasets[0].data;
    /* access meta data which will be used for animating the graph*/
    const meta = chart.getDatasetMeta(0);
    const colors = chart.data.datasets[0].backgroundColor;
    const defaultColor = 'rgb(255, 99, 132)';
    let isSorted = false;
    let counter =0;
    while(!isSorted){
        isSorted =true;
        for(let i=0;i<dataArray.length - 1 - counter; i++){
            //identifier for current bar in graph
            colors[i] = '#991fc4';
            chart.data.datasets[0].backgroundColor = colors;
            //update the bar color in graph for visual
            chart.update();
            await sleep(0.3);
            if(dataArray[i] > dataArray[i+1]){
                swap(i,i+1,dataArray,meta);
                //change the color of the bar which is greater than the current array
                colors[i + 1] = '#991fc4';
                isSorted = false;
            }
            colors[i] = defaultColor;
            chart.data.datasets[0].backgroundColor = colors;
        }
        
        colors[dataArray.length - 1 - counter] = '#7cc746';
        chart.data.datasets[0].backgroundColor = colors;
        chart.update();
        counter++;
    }
    return dataArray;
}
const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
const swap =(idx1,idx2,array,meta)=>{
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    //swap the meta data 
    let temp1 = meta.data[idx1];
    meta.data[idx1] = meta.data[idx2];
    meta.data[idx2] = temp1;
}