import React, { Component } from 'react';
import LeaderBoard from "./components/LeaderBoard"
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      players: [],
      name: "",
      campus: "",
      role: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.updatePlayerRatio = this.updatePlayerRatio.bind(this)
  }

  componentDidMount(){
    this.getAllPlayers()
  }

  getAllPlayers(){
    axios.get("/api/cheetah")
    .then(response => {
      this.setState({
        players: response.data
      })
    })
    .catch(err => console.log(err));
  }

  postThatWoodpecker(){
    const newWoodPecker = {
      name: this.state.name,
      campus: this.state.campus,
      role: this.state.role
    }
    axios.post("/api/woodpecker", newWoodPecker ).then((response) =>{
      this.setState({
        players: response.data
      })
    })
    .catch(err => console.log(err));
  }

  changeHandler(e){
    this.setState({
      campus: e.target.value
    })
  }

  universalChangeHandler(property, value){
    this.setState({
      [property]: value
    })
  }

  updatePlayerRatio(id, match){
    console.log("Function ran", id, match)
    axios.put(`/api/beaver/${id}?match=${match}`).then(response => {
      console.log("Got response;", response.data)
      this.setState({
        players: response.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.players);
    const { players } = this.state;
    

    return <div className="App">
      <div className="input-container">
          <input onChange={(e) => this.setState({name: e.target.value})} value={this.state.name}/>
          <input onChange={(e) => this.changeHandler(e)} value={this.state.campus}/>
          <input onChange={(e) => this.universalChangeHandler(e.target.name, e.target.value)} name="role" value={this.state.role}/>
      </div>
      <button onClick={() => this.postThatWoodpecker()}>Add Player</button>
      <LeaderBoard players={players} updatePlayerRatio={this.updatePlayerRatio} />
    </div>
  }
}

export default App;
