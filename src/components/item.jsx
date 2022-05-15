import React, { Component } from 'react';
class Item extends Component { 
      getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.item.value === 0 ? "warning" : "primary";
        return classes;
      }
    
      formatCount() {
        const { value } = this.props.item;
        return value === 0 ? "Zero" : value;
      }

      render() {
       // console.log("props", this.props);
        return (
          <div className="row">
              
            {this.props.children}{/* adding children  */}
            <div className="col-1">
                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">

                <button
                onClick={()=> this.props.onIncrement(this.props.item)}
                className="btn btn-secondary btn-sm"
                >
              +
                </button>
                <button
                onClick={()=> this.props.onDecrement(this.props.item)}
                className="btn btn-secondary btn-sm m-2"
                disabled = {this.props.item.value === 0 ? "disabled" : ""}
                >
              _
                </button>
                <button className="btn btn-danger btn-sm" 
                //raising event to the items component(parent)
                onClick={()=> this.props.onDelete(this.props.item.id)}
                >X</button>
            </div>
          </div>
        );
      }

    }
 
export default Item;