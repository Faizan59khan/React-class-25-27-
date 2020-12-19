import React, {Component} from 'react';
import {Header, Logo} from './components/Header'
import Footer from './components/Footer'
import BasicTextFields from './components/TextField'
import './App.css'




class App extends Component{
  constructor(){
    super()                  //we use state instead of DOM (is manages all data of component)
    this.state ={          // state is nothing its almost similar to object 
      name: "Fazian Khan",
      email: "khan_faizan59@yahoo.com",
      value: ""                //helps in taking input
      
    }
  }

  /*  set_name(){    //funtion in react
     console.log(this.state.name)  //gives error coz this esse ka lega  (bind krna parega)
  }
  */

  set_name = () =>{ //updating state
    this.setState({  //method to change any state property
      name: this.state.value
    })
 } 
 get_name = () =>{
  console.log(this.state.name)  // ye parent ka this lega
 } 

 
 set_email = () =>{ //updating state
  this.setState({  //method to change any state property
    email: this.state.value
  })
} 
get_email = () =>{
console.log(this.state.name)  // ye parent ka this lega
} 

 handleChange(e){
   this.setState({
     [e.target.name]: e.target.value
   })
 }


 get_props=(props)=>{
   console.log(props)
 }
 render(){
  
  
  return (
    <div>
       <Header get_props={this.get_props} name={this.state.name} page="Application page"/>       {/* this is header class  */}
         
        <h2>My name is {this.state.name}</h2>    {/* Getting value of state */}
        <h4>Emial: {this.state.email}</h4>

        <input name="name" onChange={(e)=>this.handleChange(e)} type="text" placeholder="enter value"/>
        <input name="email" onChange={(e)=>this.handleChange(e)} type="text" placeholder="enter email"/>

        <button  onClick={this.set_name}>Set Name</button>
        <button  onClick={this.get_name}>Get Name</button>
        <button  onClick={this.set_email}>Set Email</button>
        <button  onClick={this.get_email}>Get Email</button>
       

       <br/>
       <br/>
       <Footer/>

    </div>
  )
 }

}


export default App;
