import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log("constructor")
  }

  componentDidMount () {
  fetch('https://raw.githubusercontent.com/akoskohl/scripts/main/random_users_with_email')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .then(console.log("componentDidMount"));
      
      document.addEventListener("keydown", this.handleKeyPress);
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(()=>{return { searchField }})
    console.log("onSearchChange")
  }

  handleKeyPress = (event) => {
    if (event.key === "f" && event.metaKey) {
      console.log("Command + f pressed")
      
      event.preventDefault(); // Prevent Chrome from popping up its search box
      
      const inputField = document.querySelector(".monsters-search-box");
      if (inputField) {
        inputField.focus();
      }
    }
  }

  render() {
    console.log("render") 

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))

    return (
      <div className="App">
        <h1 className='app-title'>Monters Rolodex</h1>
        <SearchBox 
        className="monsters-search-box"
        onSearchChange={onSearchChange} 
        placeholder="search monsters (cmd+f)"
        />
        <CardList 
        monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;