import React, { Component } from 'react';
import Registration from './Component/Registration';
import Greet from './Component/Greet';
import './App.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize your component's state here
      isregister:  false,
      name:null,
      email:null,
      password:null,
    };
  };

  // You can define methods and event handlers here
  // For example, a click event handler:
  handleClick = (event) => {
    // Update the state or perform other actions here
   
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    this.setState({name,email,password,isregister:true});
    event.preventDefault();
  };

  render() {
    return (
      <div >
        {
          this.state.isregister?
          <Greet name = {this.state.name} email={this.state.email}></Greet>
          
          :<Registration submit={this.handleClick}></Registration>
        }
      </div>
    );
  }
}

export default MyComponent;