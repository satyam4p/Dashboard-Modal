import React,{useState,useEffect, useRef} from 'react';
import '../styles/contentPage.scss';
import { Bar } from 'react-chartjs-2';
import {Button} from 'reactstrap';
import {BubbleSort} from '../algorithms/bubbleSort';
import {Shuffle} from '../algorithms/shuffle';
const Content =(props)=>{
  const NUMBER_OF_ARRAY_BARS = 40;
  
  const [dataValue,setDataValue] = React.useState([]);
  const [Sorted,setSorted] = React.useState(false);
  //create ref for chatInstance
  let reference = useRef(null);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray=()=>{
    const array=Shuffle([...Array(NUMBER_OF_ARRAY_BARS).keys()].splice(1));
    setDataValue(array);
    setSorted(false);
  }

  // handlers
  const handleClickBubbleSort = (event,reference) =>{
  event.preventDefault();
  console.log(typeof dataValue," dataValue",dataValue);
  // setDataValue(BubbleSort(dataValue,reference));
  BubbleSort(reference);
  console.log(dataValue);
  setSorted(true);  
}
  const swap =(idx1,idx2,array)=>{
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  }
//random values generator method 
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  return(
    <div className='content_page'> 
        
        <div className='graph'>
        <Bar 
        data= {{
              labels:dataValue,
              datasets:[
              {
                data: dataValue,
                backgroundColor: [...Array(dataValue.length).keys()].map(() => {
                  return Sorted ? '#7cc746' : 'rgb(255, 99, 132)';
                }),
                borderWidth:1
              }
              ]}
              }
        options={{
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
              }
        ref={reference}
        height={140}
        />  
        </div>
        <Button onClick = {resetArray}>Genrate New Graph</Button>
        <Button onClick = {(e)=>{handleClickBubbleSort(e,reference)}}>Bubble Sort</Button>
    </div>
  )
}

export default Content;