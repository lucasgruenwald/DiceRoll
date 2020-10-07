import React, { Component } from 'react';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="die-style-parent">
                <i className={
                    `fas fa-dice-${this.props.face} 
                    ${this.props.rolling ? 'wobbleEffect': ''}`}></i>
            </div>
        )
    }
}

export default Die;