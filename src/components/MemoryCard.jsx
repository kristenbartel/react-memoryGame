import React, { Component } from 'react'
import './MemoryCard.css';

class MemoryCard extends React.Component {
    constructor() {
        super();
        this.state = { isFlipped: false };
    }
    clickHandler() {
        this.setState({ isFlipped: !this.state.isFlipped});
    }
    render() {
        return  <> 
                <div className='MemoryCard' onClick={this.clickHandler.bind(this)}> 
                <div className={!this.state.isFlipped ? 'MemoryCardInner' : 'MemoryCardInner flipped'}>
                    <div className='MemoryCardBack'> 
                        <img src='flipflop.png' alt='flip-flip-logo'></img>
                    </div>
                    <div className='MemoryCardFront'>∆</div>
                </div>
                </div>
                </>
    }
}


export default MemoryCard; 