import React, { Component } from 'react'
import './MemoryCard.css';

class MemoryCard extends React.Component {
    render() {
        return  <> 
                <div className='MemoryCard' onClick={this.props.pickCard}> 
                <div className={!this.props.isFlipped ? 'MemoryCardInner' : 'MemoryCardInner flipped'}>
                    <div className='MemoryCardBack'> 
                        <img src='flipflop.png' alt='flip-flip-logo'></img>
                    </div>
                    <div className='MemoryCardFront'>{this.props.symbol}</div>
                </div>
                </div>
                </>
    }
}


export default MemoryCard; 