import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import ContactList from './components/ContactList';





class App extends Component {
  state = {
    contacts: [],
    value: []
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // use map to pick relevant data and put 
        // it into a new array of objects
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });
        this.setState(newState);
      })

    // axios
    // .get("http://localhost:8080/Test/testController")
    // .then(response =>{
    //   // use map to pick relevant data and put 
    //   // it into a new array of objects
    //   const newValue = response.data.map(c =>{
    //     return c;
    //   });
    //   const newState= Object.assign({},this.state,{
    //     value:newValue
    //   });
    //   this.setState(newState);
    //   console.log('this.state.value');
    //   console.log(this.state.value);
    // })
    axios
      .get("https://connect-reactjs-api.azurewebsites.net/Test/testController")
      .then(response => {
        console.log(response);
        // use map to pick relevant data and put 
        // it into a new array of objects
        // const newValue = response.data.map(c =>{
        //   return c;
        // });
        // const newState= Object.assign({},this.state,{
        //   value:newValue
        // });
        // this.setState(newState);
        // console.log('this.state.value');
        // console.log(this.state.value);
      })


      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to our contact</h1>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
// 
export default App;
