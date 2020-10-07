import React, { Component } from 'react';
import Die from './Die'

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {
            first: "d6",
            second: "d6",
            rolling: false
        }
        this.rollDice = this.rollDice.bind(this)
    }

    rollDice(){
        let keys = {
            0: "one",
            1: "two",
            2: "three",
            3: "four",
            4: "five",
            5: "six"
        }
        let firstNum = keys[Math.floor(Math.random() * Math.floor(6))];
        let secondNum = keys[Math.floor(Math.random() * Math.floor(6))];
        this.setState({
            first: firstNum,
            second: secondNum,
            rolling: true
        })
        setTimeout(() => {
            this.setState({
                rolling: false
            })
        }, 1000);

    }

    render(){
        return(
            <div className="roll-dice">
                <div className="die-holder">
                    <Die face={this.state.first} rolling={this.state.rolling}></Die>
                    <Die face={this.state.second} rolling={this.state.rolling}></Die>
                </div>
                <button onClick={this.rollDice} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;