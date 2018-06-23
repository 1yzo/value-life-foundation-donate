// @flow

import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import './index.css';

class HeaderLink extends React.Component {
    render() {
        const { to, children } = this.props;

        return (
            <ScrollLink className="HeaderLink" activeClass="HeaderLink--active" to={to} duration={500} onSetActive={this.handleSetActive} spy smooth>
                { children }
            </ScrollLink>
        )
    }

    handleSetActive = () => this.props.history.push(this.props.to)
}

export default withRouter(HeaderLink)
