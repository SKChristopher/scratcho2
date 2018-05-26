import React, { Component } from "react";
import Button from "./button.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increaseCount = () => {
    fetch('/counter', {
      method: 'PUT',
    }).then((response) => console.log(response));

    // let count = this.state.count;
    // count += 1;
    // this.setState({ count });
  };
  delete = () => {
    fetch('/counter', {
      method: 'DELETE',
    });
  }

  render() {
    return (
      <div>
        <Button count={this.state.count} increaseCount={this.increaseCount} />
        <Button count='delete' increaseCount={this.delete} />
      </div>
    );
  }
}

export default App;
