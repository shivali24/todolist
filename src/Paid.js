import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


 function Paid(props){
return(
    <div>
<div>Description:<input type="text" placeholder="description"/></div>
<div>Enter amount:<input placeholder="Amount spent in INR" type="number"/></div>
<div>About expenses<select>
    <option>Drink</option>
    <option>Entertainment</option>
    <option>Food</option>
    <option>Hotel</option>
    <option>Parking</option>
    <option>Travel</option>
</select> </div>
Expense Paid By:
<ul>
  <select>
    {props.getList()}
    </select></ul>
</div>
);
     }
 
 export default Paid;