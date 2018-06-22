import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Store')
@observer
class App extends Component {

  setFullName() {
    this.props.Store.changeName();
    this.props.Store.changeLastName();
  }

  render() {

    return (
      <div className="App">
        <p>Hello {this.props.Store.fullName}</p>
        <button onClick={() => this.setFullName()}>Click!</button>
      </div>
    );
  }
}

export default App;
