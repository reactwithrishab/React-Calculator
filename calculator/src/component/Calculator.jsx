import React, { useState } from "react";

function Calculator() {

 const[count,setCount]=useState('')
//  iska mtlab h defined to h but not value

//  const[Opration,setOpration]=useState()


  return (
    <div  className=" d-flex flex-column  align-items-center pt-5 ">
      <h1>Calculater</h1>
      <div className=" border border-1 border-black   " style={{width:"20pc", height:"20pc"}}>
        <div className="h-25 bg-danger w-100 border border-1 border-black ">{count}</div>
        <div className="d-flex justify-content-center h-75 ">
          
            <table className=" w-75 ps-1">
              <tr >
                <td >
                  <button className="w-100  " style={{height:"4.5pc"}} value='1' onClick={(e)=>{setCount(count+e.target.value)}}>1</button>
                </td>

                <td>
                  <button className="w-100  " style={{height:"4.5pc"}}value='2' onClick={(e)=>{setCount(count+e.target.value)}}>2</button>
                </td>
                <td>
                  <button className="w-100  " style={{height:"4.5pc"}} value='3'onClick={(e)=>{setCount(count+e.target.value)}} >3</button>
                 
                 
                </td>

                <td>
                  <button className="w-100  " style={{height:"4.5pc"}} value='4' onClick={(e)=>{setCount(count+e.target.value)}}>4</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="w-100  " style={{height:"4.5pc"}} value='5' onClick={(e)=>{setCount(count+e.target.value)}}>5</button>
                </td>
                <td>
                  <button  className="w-100  " style={{height:"4.5pc"}}value='6' onClick={(e)=>{setCount(count+e.target.value)}}>6</button>
                </td>
                <td>
                  <button className="w-100  " style={{height:"4.5pc"}} value='7' onClick={(e)=>{setCount(count+e.target.value)}}>7</button>
                </td>
                <td>
                  <button  className="w-100  " style={{height:"4.5pc"}} value='8' onClick={(e)=>{setCount(count+e.target.value)}}>8</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button  className="w-100  " style={{height:"4.5pc"}} value='9' onClick={(e)=>{setCount(count+e.target.value)}}>9</button>
                </td>
                <td>
                  <button  className="w-100  " style={{height:"4.5pc"}} value='0'onClick={(e)=>{setCount(count+e.target.value)}}>0</button>
                </td>
              </tr>
            </table>
          
          <div className=" w-25 pe-1 ps-1">
            <button className="b1 w-100  mt-1 " style={{height:"2.2pc"}} value='+'  onClick={(e)=>{setCount(count+e.target.value)}}>+</button>
            <br />
            <button className="b1 w-100 mt-1"   style={{height:"2.2pc"}}value='-' onClick={(e)=>{setCount(count+e.target.value)}}>-</button>
            <br />
            <button className="b1 w-100 mt-1"  style={{height:"2.2pc"}} value='*' onClick={(e)=>{setCount(count+e.target.value)}}>*</button>
            <br />
            <button className="b1 w-100 mt-1"   style={{height:"2.2pc"}}value='/' onClick={(e)=>{setCount(count+e.target.value)}}>/</button>
            <br />
            <button className="b1 w-100 mt-1"  style={{height:"2.2pc"}}  onClick={(e)=>{setCount(eval(count))}}>=</button>
            <br />
            <button className="b1 w-100 mt-1"  style={{height:"2.2pc"}}onClick={()=>{setCount('')}}>C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
