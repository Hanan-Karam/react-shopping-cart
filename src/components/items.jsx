import React, { Component } from 'react';
import Item from "./item";

class  Items extends Component {

    //adding props to the item component, props are read only 
    render() { 
        return ( 
            <div>
                <button className="btn btn-primary m-2" onClick={this.props.onReset}>Reset Items</button>
                {this.props.items.map(item => <Item
                key ={item.id} //used inernaly by react
                //encapsulating value and id, check item comp
                item = {item}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                onDecrement = {this.props.onDecrement}
                >
                    <h6 className="m-2">
                        Item #{item.id}
                    </h6>
                </Item>
                
                )}
            </div>
         );
    }
}
 
export default Items ;