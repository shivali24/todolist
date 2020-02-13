import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'papercss/dist/paper.css';
import axios from 'axios';
import DatePicker from 'react-date-picker';



function App() {
  return(
    <div><TodoList list={[]}/></div>
  );
}
class TodoList extends React.Component
{
  
  count=0
  constructor(props)
  {
    super(props)
    this.state={
      list:'',
      newItem:"",
      date: new Date()
    }
    axios.get("http://localhost:8080/task").then((res)=>{
      this.setState({
        list: res.data
      })
    })
    this.state.list=this.props.list;
  }
  
   getList(props){
    let str=[]
    for(let item of this.state.list)
    {
      let l=this.state.list.length
      str.push(<div className="row ">
        <div id="center">
       
          <li onClick={()=>{this.changestatus(item)}}  className={item.status?" btn-block paper-btn listt btn-success":" btn-block paper-btn listt "}>{item.name}</li>  
     <button className="background-danger col-fill col" onClick={()=>{this.removeitem(item)}}>X</button>
     <button className={this.state.list.indexOf(item)===0?"background-warning col-fill col disabled":"background-warning col-fill col "} onClick={()=>{this.upitem(item)}}>Up</button>
     <button className={this.state.list.indexOf(item)===l-1?"background-secondary col-fill col disabled":"background-secondary col-fill col"} onClick={()=>{this.downitem(item)}}>Down</button>
     <button  onClick={()=>{this.pinitem(item)}}>Pin</button>
     <div>
       DueDate:
        <DatePicker
          onChange={this.onDate}
          value={this.state.date}
        />
      </div>
  </div>
  </div>
      )}
    return str;}
    onDate = date => this.setState({ date })

 input(e){
  this.setState({
    newItem: e.target.value
  });
  console.log(this.state.newItem);
}

 add(){
 if(this.state.newItem !== "")
 {
  //  console.log("hello");
  let a= this.state.list;
  let obj={name:this.state.newItem,status:"false"};
  axios.post("http://localhost:8080/task",obj).then((res)=>{
    a.push(res.data);
    this.setState({
      list:a,
      newItem:""
    })

  })
  }
}

 changestatus(item)
{
  let index=this.state.list.indexOf(item)
 // console.log(index);
let a=this.state.list
a[index].status=!a[index].status;
if(a[index].status)
{
  let c=this.count
  c=c+1
  this.count=c
}
else if(this.count!==0)
{
 let c=this.count
  c--
  this.count=c
}
this.setState(
  {list:a}
)
}
  removeitem(item)
  {
    let index=this.state.list.indexOf(item)
  let a=this.state.list
  axios.delete("http://localhost:8080/task2/"+a[index]._id).then((res)=>{
         console.log(res.data)
    })
    a.splice(index,1)
    this.setState(
      {list:a})
  }

 upitem(item)
{
  console.log("up item");
  let index=this.state.list.indexOf(item)
  let a=this.state.list
  let temp=a[index]
a[index]=a[index-1]
a[index-1]=temp
  axios.put("http://localhost:8080/task1/"+a[index]._id).then((res)=>{
    console.log(res.data)
})

this.setState({list:a})
}


 downitem(item){
  console.log("down item"); 
  let index=this.state.list.indexOf(item)
  let a=this.state.list
  let temp=a[index]
  a[index]=a[index+1]
  a[index+1]=temp
  this.setState( {list:a} )
}

 pinitem(item)
{
  let index=this.state.list.indexOf(item)
  let a=this.state.list
  let temp=a[0]
  a[0]=a[index]
  a[index]=temp
  axios.put("http://localhost:8080/task1/"+a[index]._id).then((res)=>{
    console.log(res.data)
this.setState({list:a})
})

}


  render()
  {
    return (
      <div className="color">
      <div className="flex-center">
        <button id="hello"> List Input</button>
     
      <div className="row">
      <div className="sm-6 md-8 lg-10 col  flex-center"><input className="paper-btn btn-block " type="text" id="input" onChange={(e)=>{this.input(e)}} value={this.state.newItem} placeholder="enter task" /> </div>
        <div  id="hello"><button onClick={(e)=>{this.add(e)}}>Insert</button></div>
        </div>
        
    <h3>Completed Items:{this.count}/ {this.state.list.length}</h3>
  
<h3>TODO-LIST</h3>
<div>
<ul>
{this.getList() }
</ul>
      </div>
      </div>
      </div>
    );
  }
}


export default App;
