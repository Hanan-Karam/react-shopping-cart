import React, { Component } from 'react';
import './App.css';
import Items from './components/items';
import Navbar from './components/navbar';

class App extends Component {
  state = {  
    items : [
        {id : 1, value : 4},
        {id : 2, value : 2},
        {id : 3, value : 5},
        {id : 4, value : 1}
    ]
}

handleDelete= (itemId)=>{
   // console.log("delete was clicked", itemId);
   const items = this.state.items.filter(i => i.id !== itemId);
   this.setState({items});
};

handeleIncrement = item =>{
    const items = [...this.state.items];
   // items[0] = {...items}
    
    const index = items.indexOf(item);
    items[index] = {...item};
    items[index].value++;
    this.setState({items});
   // console.log(items[0]);
}
 
handeleDecrement = item =>{
  const items = [...this.state.items];
 // items[0] = {...items}
  const index = items.indexOf(item);
  items[index] = {...item};
  items[index].value--;
  this.setState({items});
 // console.log(items[0]);
}

handelReset = () =>{
    const items = this.state.items.map(c =>{
        c.value =0;
        return c
    });
    this.setState({items});
}

  render() { 
    return (
      <React.Fragment>
        <Navbar totalItems = 
        {this.state.items.filter(i => i.value > 0 ).length}/>
          <main className ="container">
            <Items
            items={this.state.items}
            onReset={this.handelReset}
            onIncrement ={this.handeleIncrement}
            onDelete={this.handleDelete}
            onDecrement = {this.handeleDecrement}
            
            />
          </main>
        </React.Fragment>
    );
  }
}
 
export default App;

