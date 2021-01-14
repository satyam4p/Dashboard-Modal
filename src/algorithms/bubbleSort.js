
export const BubbleSort = async reference =>{
    /*accesssing chart instance */
    let chart = reference.current.chartInstance;
    /* access the data array */
    const dataArray = chart.data.datasets[0].data;
    /* access meta data which will be used for animating the graph*/
    const meta = chart.getDatasetMeta(0);
    const colors = chart.data.datasets[0].backgroundColor;
    const defaultColor = 'rgb(255, 99, 132)';
    
    let tmp;
     for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length - i - 1; j++) {
      colors[j] = '#991fc4';
      chart.data.datasets[0].backgroundColor = colors;

      chart.update();
      await sleep(10);

      if (dataArray[j] > dataArray[j + 1]) {
        tmp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = tmp;

        tmp = meta.data[j];
        meta.data[j] = meta.data[j + 1];
        meta.data[j + 1] = tmp;
        colors[j + 1] = '#991fc4';
      }

      colors[j] = defaultColor;
      chart.data.datasets[0].backgroundColor = colors;
    }
    colors[dataArray.length - i - 1] = '#7cc746';
    chart.data.datasets[0].backgroundColor = colors;
    chart.update();
  }
};

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