import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ShopingList extends React.Component {
  render(){
    return(
      <div className="shopping-list">
        <h1>Shoping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>Whatsapp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <ShopingList name="Nabil" />
    );
  }
}

export default App;
