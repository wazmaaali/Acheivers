import React from "react";
import { Link } from "react-router-dom";
class Menu extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        selectValue:'Go To'
      };
    }
    handleChange(event){
      this.setState({selectValue:event.target.value});
      <Link
        to="/MainCategory"
        state={{
        id: "1",
        }}
    >
        event.target.value
    </Link>
    }
      
    render() {
      return (
              
      );
    }
  }
  
  export default Menu;


