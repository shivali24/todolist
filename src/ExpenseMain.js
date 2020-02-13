import React from 'react';


export default function index (props){
          return( 
<div>
<div class="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.db.tripname}</h5>
     <div class="card-text">
     <div>Place Details:</div> 
     <div>
     <ul>
    {props.db.placelist.map((data)=>{
      return(
        <li  class="card-text">
{data}
        </li>
      )
    })
    }</ul></div>
     <div>Person Details:</div> 
     <div>
     <ul>
    {props.db.personList.map((data)=>{
      return(
        <li  class="card-text">
{data}
        </li>
      )
    })
    }</ul></div>
    <div>
     <ul>
    {props.db.tripdata.map((data)=>{
      return(
        <li  class="card-text">
{data}
        </li>
      )
    })
    }</ul></div>
    </div>
</div>
</div>
</div>
);
    } 