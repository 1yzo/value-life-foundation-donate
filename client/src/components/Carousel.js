import React from 'react';
import '../styles/carousel.css';
import { setTimeout } from 'timers';

class Carousel extends React.Component {
    state = { 
        index: 0,
        shouldHide: false
    };

    handleClick = () => {
        setTimeout(this.changeItem, 500);
        this.setState(() => ({ shouldHide: true }));
    };

    changeItem = () => {
        this.setState((prevState) => {
            if (prevState.index + 1 < this.props.items.length) {
                return { 
                    index: prevState.index + 1,
                    shouldHide: false
                };
            } else {
                return {
                    index: 0,
                    shouldHide: false
                };
            }
        });
    };
    
    render() {
        return (
            <div className={"carousel-item" + (this.state.shouldHide ? " carousel-item--hidden" : "")} 
                onClick={this.handleClick} 
            >
                {this.props.items[this.state.index]}
            </div>
        );
    }
}

export default Carousel;