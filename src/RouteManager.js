import React,{Component} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './Header';
import ExpenseMain from './ExpenseMain';
import Paid from './Paid';
import Tripdetails from './Tripdetails';
export default class Index extends Component{
  constructor(props)
  {
    super(props)
    this.state={}
    this.state.db={  
      placelist: [],
      personList:[],
      tripdata:[],
      place:"",
      person:"",
      tripname:"",
      date: new Date(),
    card:[{}]
  }
    }
    inputtitle=(e)=>
    {
      this.setState({
  tripname: e.target.value
      });
      console.log(this.state.tripname)
    }
    inputplace=(e)=>
    {
      this.setState({
        place: e.target.value
      });
      console.log(this.state.place);
    }
      inputperson=(e)=>
      {
        this.setState({
    person: e.target.value
        });
        console.log(this.state.person);
      }
      addplacelist=()=>
      {
        if(this.state.place!== "")
        {
           let db= this.state.db;
           db.placelist.push(this.state.place);
           this.setState({
             db:db,
            place:"" })
           }
           console.log(this.state.db.placelist)
          }
          addpersonlist=()=>
           {
             console.log("hello shivali")
             if(this.state.person!=="")
             {
               let db=this.state.db;
               db.personList.push(this.state.person);
               this.setState({
                 db:db,
                 person:"" })
                }
             console.log(this.state.db.personList);
           }
           onDate = date => this.setState({ date })


           getList=()=>{
             console.log(this.state.db.personList)
            this.state.db.personList.map((data)=>{
              return(
                <select>
                <option  class="card-text">{data}
              </option> </select>
                )
            })
           }
  render()
  {
    return(
     <Router>
       <Header></Header>
       <Switch>
       <Route path="/" exact render={props=><ExpenseMain {...props} db={this.state.db}> </ExpenseMain>}/>
       <Route path="/paid" render={props=><Paid {...props} db={this.state.db} getList={this.getList}></Paid>}/>
       <Route path="/form" render={props=><Tripdetails  {...props} db={this.state.db} onDate={this.onDate} inputtitle={this.inputtitle}  inputperson={this.inputperson}   inputplace={this.inputplace} addperson={this.addpersonlist}  addplace={this.addplacelist}></Tripdetails>}/>
       </Switch>
     </Router>
    )
  }
        } 
      
