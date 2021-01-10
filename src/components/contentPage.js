import React,{useState,useEffect} from 'react';
import '../styles/contentPage.scss';
import { Bar } from 'react-chartjs-2';
import {Button} from 'reactstrap';
import {BubbleSort} from '../algorithms/bubbleSort';
const Content =(props)=>{
  const NUMBER_OF_ARRAY_BARS = 300;
  
  const [dataValue,setDataValue] = React.useState([]);
  const [Sorted,setSorted] = React.useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray=()=>{
    const array=[];
    for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
      array.push(randomIntFromInterval(5,730));
    }
    setDataValue(array);
    setSorted(false);
  }

  // handlers
  const handleClickBubbleSort = (event) =>{
  event.preventDefault();
  console.log(dataValue);
  setDataValue(BubbleSort(dataValue));
  console.log(dataValue);
  setSorted(true);  
}
  const swap =(idx1,idx2,array)=>{
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  }
  const data={
    labels:dataValue.map((val,index)=>{
      return val 
    }),
    datasets:[
      {
        data: dataValue.map((val,index)=>{
          return val;
        }),
        borderWidth:1
      }
    ]
  }
  const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}


//random values generator method 
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  return(
    <div className='content_page' > 
        <Button onClick = {resetArray}>Genrate New Graph</Button>
        <Button onClick = {handleClickBubbleSort}>Bubble Sort</Button>
        <div className='graph'>
        <Bar data= {data} options={options}/>       
        </div>
    </div>
  )
}

export default Content;