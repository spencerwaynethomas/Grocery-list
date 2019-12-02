import React, { Component } from 'react';
import List from "./List"
import GroceryForm from "./GroceryForm"
import './App.css';
import "./Grocerys"

class App extends Component {
  state = { grocerys: [] }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
  
   addItem = (name) => {
     const { grocerys } = this.state
     const grocery = {name, id: this.getUniqId(), complete: false}
     this.setState({grocerys: [grocery, ...grocerys] })
   }

  render() {
    const { grocerys } = this.state

    return (
      <div>
        <GroceryForm addItem={this.addItem} />
      <List name="Grocery List" items={grocerys} />
      </div>
    );
  }
}

export default App;
