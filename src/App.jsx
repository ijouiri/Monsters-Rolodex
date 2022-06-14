import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.comonent.jsx';
import { SearchBox } from './components/search-box/search-box.comonent.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({
          monsters: users
        })
      })
  }

  changeHandler = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search for A Monster'
          changeHandler={this.changeHandler}
        />
        < CardList monsters={filteredMonsters} />
      </div >
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
