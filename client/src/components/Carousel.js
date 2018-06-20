import React from 'react';
import '../styles/carousel.css';
import { setTimeout } from 'timers';

class Carousel extends React.Component {
    state = { 
        index: 0,
        shouldHide: false
    };

    createIndexDots = () => {
        const dots = [];
        for (let i = 0; i < this.props.items.length; i++) {
            dots.push(<div 
                            className={"carousel__switch__dot" + (i === this.state.index ? " carousel__switch__dot--active" : "")} 
                            style={{ background: this.props.switchColor }} 
                            key={i} 
                        />)
        }
        return dots;
    }

    handleClick = (e) => {
        const direction = e.target.attributes.name.value;
        setTimeout(this.changeItem.bind(null, direction), 500);
        this.setState(() => ({ shouldHide: true }));
    };

    changeItem = (direction) => {
        this.setState((prevState) => {
            if (direction === 'right') {
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
            } else if (direction === "left") {
                if (prevState.index - 1 >= 0) {
                    return {
                        index: prevState.index - 1,
                        shouldHide: false
                    };
                } else {
                    return {
                        index: this.props.items.length - 1,
                        shouldHide: false
                    };
                }
            }
        });
    };
    
    render() {
        return (
            <div className="carousel">
                <div
                    className={"carousel-item" + (this.state.shouldHide ? " carousel-item--hidden" : "")}  
                >
                    {this.props.items[this.state.index]}
                </div>
                <div className="carousel__switch" style={{ color: this.props.switchColor }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <i className="material-icons switch__arrow" name="left" onClick={this.handleClick}>keyboard_arrow_left</i>
                        {this.createIndexDots()}
                        <i className="material-icons switch__arrow" name="right" onClick={this.handleClick} >keyboard_arrow_right</i>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Carousel;