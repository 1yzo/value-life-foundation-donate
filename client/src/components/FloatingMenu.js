import React from 'react';
import '../styles/FloatingMenu.css';
import { Link } from 'react-scroll';

class FloatingMenu extends React.Component {
    state = {
        shouldExpand: false
    };
    
    handleExpand = () => {
        this.setState((prevState) => ({ shouldExpand: !prevState.shouldExpand }));
    }

    componentDidUpdate() {
        console.log('willUpdate')
        if (this.props.donateClicked && this.state.shouldExpand) {
            this.setState(() => ({ shouldExpand: false }));
            this.props.resetDonateClicked()
        }
    }
    
    render() {
        return (
            <div 
                className={"floating-menu" + (this.state.shouldExpand ? " floating-menu--expanded" : "")}
                onClick={this.handleExpand}
                onTransitionEnd={this.handleTransitionEnd}
            >
                {!this.state.shouldExpand && <i className="material-icons drawer">menu</i>}
                {
                    this.state.shouldExpand &&
                    <div className="links-section--mobile">
                        <Link onClick={this.handleExpand} className="link link--mobile" to="about-us-page" spy smooth duration={500} offset={-70}>
                            <h4>ABOUT US</h4>
                        </Link>
                        <Link onClick={this.handleExpand} className="link link--mobile" to="programs-page" spy smooth duration={500} offset={-70}>
                            <h4>PROGRAMS</h4>
                        </Link>
                        <Link onClick={this.handleExpand} className="link link--mobile" to="current-projects-page" spy smooth duration={500} offset={-70}>
                            <h4>CURRENT PROJECTS</h4>
                        </Link>
                        <Link onClick={this.handleExpand} className="link link--mobile" to="links-page" spy smooth duration={500} offset={-70}>
                            <h4>LINKS</h4>
                        </Link>
                    </div>
                }
            </div>
        );
    }
}

export default FloatingMenu;