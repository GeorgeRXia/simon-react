import React, { Component } from 'react';
import Simonwheel from './components/Simonwheel';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
      game:false

    }

  this.setGame = this.setGame.bind(this);
  this.resetGame = this.resetGame.bind(this);
  }

  render() {
    if(this.state.game === false){
    return (
      <div>
      <Simonwheel />
      <button onClick={this.setGame} > Start Game </button>
      </div>
    );
  }else{
    return   <Simonwheel startGame={this.state.game} setGame= {this.resetGame}/>


  }
  }
  setGame(state){

    this.setState({game: true })


  }
  resetGame(){

    this.setState({game: false })

  }
}

export default App;
