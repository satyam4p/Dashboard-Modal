
export const BubbleSort = async reference =>{
    let chart = reference.current.chartInstance;
    console.log(" reference: ",reference," chart: ",chart);
    const dataArray = chart.data.datasets[0].data;
    const meta = chart.getDatasetMeta(0);
    const colors = chart.data.datasets[0].backgroundColor;
    const defaltColor = 'rgb(255, 99, 132)';
    let tmp;
     for (let i = 0; i < dataArray.length; i++) {
        for (let j = 0; j < dataArray.length - i - 1; j++) {
        colors[j] = '#991fc4';
        chart.data.datasets[0].backgroundColor = colors;

        chart.update();
        await sleep(0.3);

        if (dataArray[j] > dataArray[j + 1]) {
            tmp = dataArray[j];
            dataArray[j] = dataArray[j + 1];
            dataArray[j + 1] = tmp;

            tmp = meta.data[j];
            meta.data[j] = meta.data[j + 1];
            meta.data[j + 1] = tmp;

            colors[j + 1] = '#991fc4';
        }

      colors[j] = defaltColor;
      chart.data.datasets[0].backgroundColor = colors;
    }
    colors[dataArray.length - i - 1] = '#7cc746';
    chart.data.datasets[0].backgroundColor = colors;
    chart.update();
  }
    // let isSorted = false;
    // let counter =0;
    // while(!isSorted){
    //     isSorted =true;
    //     for(let i=0;i<array.length - 1 - counter; i++){
    //         if(array[i] > array[i+1]){
    //             swap(i,i+1,array);
    //             isSorted = false;
    //         }
    //     }
    //     counter++;
    // }
    // return array;
}
const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
const swap =(idx1,idx2,array)=>{
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}