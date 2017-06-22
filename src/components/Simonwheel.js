import React, { Component } from 'react';
import './Simonwheel.css';
import AddToSequenceAndRound from './AddToSequenceAndRound';
import AnimateSequence from './AnimateSequence'
class Simonwheel extends Component {
  constructor(props) {
    super(props)

    this.state = {

      computerSequence: [],
      playerSequence: [],
      round: 1,
      startGame: props.startGame,
      playersTurn: false,
      playerScore: 0

    }
    this.playerMoves = this.playerMoves.bind(this);
    this.computerMoves = this.computerMoves.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.addToRound = this.addToRound.bind(this);

  }

  render(){

    if (this.state.startGame && this.state.computerSequence.length < this.state.round){
      console.log("round 2");
      return(
        <div className="simon">
          <ul>
          <li className="red t" ></li>
          <li className="blue t"  ></li>
          <li className="yellow t"  ></li>
          <li className="green t"  ></li>
          </ul>
          <AddToSequenceAndRound computerMove={this.computerMoves} computerSequence={this.state.computerSequence}/>

        </div>

      )


    }else if(this.state.startGame && !this.state.playersTurn){

      return(
      <div className="simon">
        <ul>
          <li className="red 1" onClick={this.playerMoves} id="1"></li>
          <li className="blue 2" onClick={this.playerMoves} id="2"></li>
          <li className="yellow 3" onClick={this.playerMoves} id="3"></li>
          <li className="green 4"  onClick={this.playerMoves} id="4"></li>
        </ul>
        <AnimateSequence computerSequence={this.state.computerSequence}/>
        <div> Hellow goodbye</div>
      </div>
    )


    }else{
      console.log("it's in");
      return(
        <div className="simon">

          <ul>
          <li className="red" onClick={this.playerMoves} id="1"></li>
          <li className="blue" onClick={this.playerMoves} id="2"></li>
          <li className="yellow" onClick={this.playerMoves} id="3"></li>
          <li className="green" onClick={this.playerMoves} id="4"></li>
          </ul>
          </div>
        )
  }

  }

  playerMoves(event){


    let highLight = document.getElementById(highLightId);
    setTimeout(function(){
        highLight.classList.add("highlight")

        setTimeout(function(){

          highLight.classList.remove("highlight")


        },200)

    },0)


    this.setState({playersTurn: true})
    let computerSequence = this.state.computerSequence;

    let playerSequence = this.state.playerSequence;
    playerSequence.push(parseInt(event.target.id))
    let playerSequenceIndex = playerSequence.length;
    playerSequenceIndex --;



    let i = playerSequence.length - 1;

   if(computerSequence[i] === playerSequence[i] ){
     console.log("inside the game");
      this.setState({playerSequence: playerSequence})

    }else {

      this.gameOver();

    }

    if (computerSequence.length === playerSequence.length){
      console.log("inside the game");
      this.addToRound()

    }


  }
  gameOver(){

    this.props.setGame()


  }

  computerMoves(latestSequence, round){
    this.setState({computerSequence:latestSequence})
  }
  addToRound(){
    console.log("inside the game");
    let currentRound = this.state.round;
    currentRound ++;
    console.log(currentRound);
    this.setState({round: currentRound, playerSequence: [], playersTurn: false})

  }
}
export default Simonwheel
