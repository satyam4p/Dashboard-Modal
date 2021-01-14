import React,{useState,useEffect, useRef} from 'react';
import '../styles/contentPage.scss';
import { Bar } from 'react-chartjs-2';
import {Button} from 'reactstrap';
import {BubbleSort} from '../algorithms/bubbleSort';
import {Shuffle} from '../algorithms/shuffle';
import {QuickSort} from '../algorithms/quickSort';
import {} from '../algorithms/mergeSort';
const Content =(props)=>{
//number of bars in the graph
const NUMBER_OF_ARRAY_BARS = 70;
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
                setSorted(true);
            });
}
const handleQuickSort=(event,reference)=>{
  event.preventDefault();
  // console.log("reference for bubble sort: ",reference);
  QuickSort(reference);


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
                legend: {
                  display:false
                },
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
        <Button onClick = {(e)=>{handleQuickSort(e,chartReference)}}>QuickSort</Button>
    </div>
  )
}
export default Content;