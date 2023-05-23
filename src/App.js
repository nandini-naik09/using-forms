import './App.css';
import React, {Component} from 'react'


class App extends Component {

constructor(){
  super();
  this.state={
    participate:"",
    roll_no:null,
    errormessgae:""
};
}

changeHandler=(event)=>{

  let name=event.target.name;
  let val= event.target.value;
  let error="";

if(name==="roll_no")
{
  if(!Number(val))
  {
    error=<h5>Your roll_no must be a Number</h5>
  }
}

this.setState({errormessgae:error});


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
  header=<h3>Thank you for registration {this.state.participate}</h3>
}

    return(
<div className='outerdiv'>
      <form className='formcenter'   onSubmit={this.submitHandler}>
        {header}
        <h3>
          Welcome {this.state.participate}
        </h3>
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
        <input type='submit' className='button-class' />

        <br/> 
     {this.state.errormessgae}
      </form>
      </div>


    )
  }
}

export default App;
