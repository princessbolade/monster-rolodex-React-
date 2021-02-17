import "./App.css";
import { CardList } from "./Components/card-list/card-list";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="Search Monsters" />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
