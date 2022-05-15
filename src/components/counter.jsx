import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 3,
        imageURL : "https://picsum.photos/100",
        tags : ['tag1', 'tag2', 'tag3'],
        names : ['abd','dfg', 'ghj']
    }
    //the this keyword  problem in event handeling
    constructor(){
        super();
        this.handelingCounter = this.handelingCounter.bind(this);    
    }

    style = {
        fontSize : 15,
        fontWeight : 'bold'
    }
   
    render() {
        return (
        <React.Fragment>
            {/*<span style ={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>*/}
            {/*rendering dynamic classes */}
            {<span style ={this.style} className={this.addedBadeClasses()}>{this.formatCount()}</span>}

            {/*event handling
            <button onClick={this.handelingCounter} style={{fontSize:20}}className="btn btn-secondary btn-sm">Increment</button>
        */}
            
            {/*event handling with passing arguments}*/}
            <button onClick={()=>{
                this.handelingCounter({id:1});
            }} style={{fontSize:20}}className="btn btn-secondary btn-sm">Increment</button>
        

            {/*Rendering list of items */}
            <ul>
                {/*it gives warning beacuse items needs
               a unique key to help react sync state cchanges in the vertual do with the real dom */}
                
                {/*Solution */}
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            {this.state.names.length === 0 && "Please add some names"}
            {this.renderNames()}
        </React.Fragment>
        );
        
    }
    handelingCounter(productID){
      //  console.log("increment clicked");
      //console.log(this.state.count);//gives error because this needs rebind
      //solution=>convert the methode to an arrow function or
      //bind this using constructor
      this.setState({count: this.state.count +1}); //updating state
    }
    /*rendering dynamic classes */
    addedBadeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){

       // return this.state.count === 0 ? "Zero" : this.state.count;

       //object destructure
        const{count} = this.state; 
        return count === 0 ? "Zero" : count;
    }
    /*Conditional rendering */
    renderNames(){
        if(this.state.names.length === 0) return <p>There is no available names</p>
        return <ul>{this.state.names.map(name => <li key={name}>{name}</li>)}</ul>;
    }
}
 
export default Counter ;