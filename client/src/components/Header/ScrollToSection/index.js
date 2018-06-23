// @flow

import React from 'react'
import { scroller, animateScroll } from 'react-scroll'
/*
type Props = {|
    ...RouteProps // TODO:
|}
*/

class ScrollToSection extends React.Component {
    componentDidMount() {
        console.log('scrolled to route props:', this.props);
        const { match:{ path } } = this.props;

        console.log('path:', path);
        // animateScroll.scrollTo(path, {
        //     duration: 500,
        //     smooth: true,
        //     containerId: path
        // });
    }
    render() {
        return null;
    }
}

export default ScrollToSection
