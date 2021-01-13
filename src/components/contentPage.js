import React,{useState,useEffect, useRef} from 'react';
import '../styles/contentPage.scss';
import { Bar } from 'react-chartjs-2';
import {Button} from 'reactstrap';
import {BubbleSort} from '../algorithms/bubbleSort';
import {Shuffle} from '../algorithms/shuffle';
const Content =(props)=>{
//number of bars in the graph
const NUMBER_OF_ARRAY_BARS = 30;
const [dataValue,setDataValue] = useState([]);
const [Sorted,setSorted] = useState(false);
//create ref for chatInstance
let chartReference = useRef(null);

//reeset or shuffle the array once the screen reloads or loads
useEffect(() => {
    resetArray();
}, []);
const resetArray=()=>{
  //the object of array should be converted to array
  const array=Shuffle([...Array(NUMBER_OF_ARRAY_BARS).keys()].splice(1));
  setDataValue(array);
  setSorted(false);
}
// handlers
    const handleClickBubbleSort = (event, chartReference) => {
        setSorted(false);
        event.preventDefault();
        //Calls setting sorted data and setting color after sort is done
        BubbleSort(chartReference)
            .then((sortedDataValue) => {
                setDataValue(sortedDataValue);
                setSorted(true);
            });
}
  return(
    <div className='content_page'> 
        
        <div className='graph'>
        <Bar 
        data= {{
          /*the chart library accepts only pure array and while setting up the state 
           the dataValue object is converted to array*/
              labels:dataValue,
              datasets:[
              {
                data: dataValue,
                backgroundColor: dataValue.map(() => {
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
                 xAxes: [{
                    ticks: {
                        display: false //this will remove only the label
                    }
                }]
                },
              }
              }
        /*ref represents the chart instance
        which will be used to change and compare adta value for sorting*/
        ref={chartReference}
        height={140}
        />  
        </div>
        <Button onClick = {resetArray}>Genrate New Graph</Button>
        <Button onClick = {(e)=>{handleClickBubbleSort(e,chartReference)}}>Bubble Sort</Button>
    </div>
  )
}

export default Content;