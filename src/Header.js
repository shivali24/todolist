import React from 'react';
import {Link} from 'react-router-dom';
export default function index(){
  
   return(
    <nav class="navbar navbar-dark bg-primary">
   <Link to="/"><button class="navbar-brand">Home</button> </Link> 
    <form class="form-inline">
      
    
  <ul>
  <Link to="/paid"><li class="navbar-brand" >Expenses Paid</li></Link>
    </ul>     

    <ul>
  <Link to="/form"><li class="navbar-brand" >Add trip details</li></Link>
    </ul>    
    </form>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </nav>
  
   )
  }
