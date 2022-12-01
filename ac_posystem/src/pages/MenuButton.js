import React from "react";
class Menu extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectValue:'Home'
    };
  }
  
  handleChange(event){
    this.setState({selectValue:event.target.value});
  }
    
  render() {
    return (
      <div>
        <select 
          value={this.state.selectValue} 
          onChange={this.handleChange} 
        >
          <option value="Home">Home</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Other">Other</option>
        </select>
      </div>        
    );
  }
}

  
export default Menu;
