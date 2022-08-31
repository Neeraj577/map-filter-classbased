import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Shankar" },
        { name: "Saroj" },
        { name: "Subash" },
        { name: "Santosh" },
        { name: "Shiva" },
        { name: "Shivakoti" },
        { name: "Sapkota" },
        { name: "Shyam" },
        { name: "Hari" }
      ],
      userName: "Neeroj",
      searchField: ""
    };
  }
  componentDidMount() {
    console.log("From Component did mount!");
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const filteredName = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1>Hello {this.state.userName}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input
          placeholder="Enter your friend"
          type="search"
          className="search-box"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />
        <ol>
          {filteredName.map((monster, index) => {
            return <li key={index}>{monster.name}</li>;
          })}
        </ol>
      </div>
    );
  }
}
export default App;
