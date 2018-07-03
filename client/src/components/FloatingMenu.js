import React from 'react';
import '../styles/FloatingMenu.css';

class FloatingMenu extends React.Component {
    state = {
        shouldExpand: false
    };
    
    handleExpand = () => {
        this.setState((prevState) => ({ shouldExpand: !prevState.shouldExpand }));
    }
    
    render() {
        return (
            <div 
                className={"floating-menu" + (this.state.shouldExpand ? " floating-menu--expanded" : "")}
                onClick={this.handleExpand}
            >
                {this.state.shouldExpand && <h1>Menu</h1>}
                <i className="material-icons drawer">menu</i>
            </div>
        );
    }
}

export default FloatingMenu;