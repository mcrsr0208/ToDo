import React from "react";
import "./style.css";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items:[]
    }
  }

  addItem = () =>{
    var item;
    if(item = prompt('Enter Item Name? ')){
      var itemsArray = this.state.items.slice();
      itemsArray.push(item);
      this.setState({
        items:itemsArray
      });
    }
    
  }

  removeItem = (event) =>{
    event.target.remove();
  }


  render(){
    return(
      <div className="container">
        <h1>ToDo List</h1>
        <ul className="list-unstyled">
        { this.state.items.map(item => <li key={item.id} onClick={this.removeItem}>{item}</li>) }
        </ul>
        <button onClick={ this.addItem }>Add</button>
      </div>
    );
  }
}

export default App;
