import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'


class App extends Component {

constructor(){
  super();
  this.state={
    participate:"",
    roll_no:null
};
}

changeHandler=(event)=>{

  let name=event.target.name;
  let val= event.target.value;

if(name==="roll_no")
{
  if(!Number(val))
  {
    alert("Roll numer must be Number.");
  }
}

  this.setState({
    [name]:val
  });
}

submitHandler=(event)=>{
  event.preventDefault();
  alert(this.state.participate + " Registered")
}


  render(){

let header="";
if(this.state.participate)
{
  header=<h1>Thank you for registration {this.state.participate}</h1>
}

    return(

      <form onSubmit={this.submitHandler}>
        {header}
        <h1>
          Welcome {this.state.participate}
        </h1>
        <p>Register your name:</p>

        <input type='text' 
        placeholder='Name'
        name='participate'
        onChange={this.changeHandler}/>

      <p>Enter your roll_no</p>

        <input type='text' 
        placeholder='Roll No'
        name='roll_no'
        onChange={this.changeHandler}/>
        <br/> <br/>
        <input type='submit' />

        <br/> 
        <h2> Your roll_no is {this.state.roll_no} </h2>
      </form>


    )
  }
}

export default App;
