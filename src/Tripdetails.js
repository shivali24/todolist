import React from 'react'
import DatePicker from 'react-date-picker';

export default function Tripdetails(props) {
    return (
        <div>
             <div>
      <div >
        <label >TRIP OR PARTY NAME</label>
        <input type="text"  class="input-group-text"  placeholder="Enter Trip Name" onChange={props.inputtitle}/>
      </div>
      <div class="card">
        <div class="card-body">
        <label >Places To Visit</label>
       <div>  <input type="text"  class="input-group-text" placeholder="Add Place"  onChange={props.inputplace} />
       <button  class="btn btn-info" onClick={(e)=>{props.addplace(e)}}>Add</button></div>
        
      <div>   <DatePicker
          onChange={props.onDate}
          value={props.db.date}
        /></div>
      </div>
      </div>
      </div>
       <div><h4>Person Details</h4></div>
       <input type="text"  class="input-group-text" onChange={props.inputperson} /><button  class="btn btn-info" onClick={(e)=>{props.addperson(e)}}>+</button>
      
        </div>
      
    )
}
