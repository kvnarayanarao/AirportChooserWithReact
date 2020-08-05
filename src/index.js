import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import Button from '@material-ui/core/Button';
import MenuList from './components/menuList.component'
import "./App.css"


class App extends Component {
  constructor(props){
    super()
    this.state= {
      options: []
    }
    this.getData = this.getData.bind(this)
  }
  async getData(filename) {
    const response = await fetch(`./airlines.json`);
    const data = await response.json()
    const options = data.map(airline => {
      return { value: airline.code, label: `${airline.name} ${airline.city}/${airline.country} ${airline.code}` }
    })
    this.setState({options})
  }
  
  
  render() { 
    const { options } = this.state
    return ( 
      <div className='airlines-container'>
        <Button variant="contained" color="primary" onClick={this.getData}>
          Airport Chooser
        </Button>
        {options.length ? <Select className='menu-list' components={{ MenuList }} options={options} /> : null}  
      </div>
     )
  }
}
 
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
