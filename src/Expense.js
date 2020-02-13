import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'react-date-picker';
//import Main from './ExpenseMain';

class ExpenseManager extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={  
      list: [],
      newItem:"",
      personList:[],
      person:"",
      tripname:"",
      date: new Date()}
    }
    onSubmit=(e)=>{
      e.preventDefault();
    }
  
  input(e){
    
    this.setState({
      newItem: e.target.value
    });
    // console.log(this.state.newItem);
  }
  input1(e)
  {
    this.setState({
person: e.target.value
    });
    console.log(this.state.person);
  }
  inputtitle(e)
  {
    this.setState({
tripname: e.target.value
    });
    console.log(this.state.tripname);
  }
  addperson()
  {
    console.log("hello shivali")
    if(this.state.person!=="")
    {
      let p=this.state.personList;
      p.push(this.state.person);
      this.setState({
        personList:p,
        person:""
      })
    }
  }


  add(){
    if(this.state.newItem !== "")
    {
       let a= this.state.list;
       a.push(this.state.newItem);
       this.setState({
         list:a,
         newItem:""
       })
       
     }
   }
   
   persoList=()=>
   {
    return(
      <div>
<div class="card" style={{width: "18rem"}}>
  <img src="https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/05/20172622/ce-travel.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Trip name:{this.state.tripname}</h5>
<p  class="card-text">Places To Visit</p>
    <ul>
    {this.state.list.map(data=>{
      return(
        <li  class="card-text">
{data} 
        </li>
      )
    })
    }</ul>
    <p class="card-text">Person Details</p>
    <ul>
    {this.state.personList.map(data=>{
      return(
        <li  class="card-text">
{data}
        </li>
      )
    })
    }</ul>
    <DatePicker
          onChange={this.onDate}
          value={this.state.date}
          />
  </div>
</div>
</div>
      
    )
   }
  // itemList=()=>
  //  {
  //   return(
  //     this.state.list.map((item,i)=>{
  //       return(<div key={i}>
  //         <li>
  //           {item}
  //         </li>
  //       </div>)
  //     })
  //   )
  //  }
   onDate = date => this.setState({ date })

  render(){
  return( 
    <div>
    <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlfor="formGroupExampleInput">TRIP OR PARTY NAME</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Trip Name" onChange={(e)=>{this.inputtitle(e)}}/>
    <button onClick={(e)=>{this.pushtitle(e)}}>Add</button>
      </div>
      <div className="form-group">
        <label htmlfor="formGroupExampleInput2">Places To Visit</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"  onChange={(e)=>{this.input(e)}} value={this.state.newItem}/>
        <button  onClick={(e)=>{this.add(e)}}>Add</button>
      </div>
    </form>
      <div> <h4>Person Details</h4><input type="text" onChange={(e)=>{this.input1(e)}}  value={this.state.person} /> <button onClick={(e)=>{this.addperson()}}>Add</button></div>
      <div>{this.persoList()}</div>
      <div class="card" style={{width: "18rem"}}>
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
<h3>Expenses Paid By:</h3>
<div>
<ul><select>
    {this.state.personList.map(data=>{
      return(
        
        
        <option  class="card-text">{data}
      </option> 
       
    
      )
    })
    }
    </select>
    </ul></div>
    <div><button>Add</button></div>
            </div>
            </div>
       );
  }
}
export default ExpenseManager;