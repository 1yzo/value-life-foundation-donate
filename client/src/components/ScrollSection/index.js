// @flow

import React from 'react'
import { Link, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

import './index.css'

class ScrollSection extends React.Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log('end', arguments);
        });

        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div class="ScrollSections">
                <div class="ScrollSections__links">
                    <Link activeClass="ScrollSections__links--active" to="box-blue" spy smooth duration={500} onSetActive={this.handleSetActive}>
                        Box Blue
                    </Link>
                    <Link activeClass="ScrollSections__links--active" to="box-green" spy smooth duration={500}>
                        Box Green
                    </Link>
                    <Link activeClass="ScrollSections__links--active" to="box-red" spy smooth duration={500}>
                        Box Red
                    </Link>
                    <a onClick={this.scrollToTop}>To the top!</a>
                    <br />
                    <a onClick={this.scrollToBottom}>To the bottom!</a>
                </div>
                <div class="ScrollSections__sections">
                    <Element className="Box Box--blue" name="box-blue">
                        This is the blue box
                    </Element>
                    <Element className="Box Box--green" name="box-green">
                        This is the green box
                    </Element>
                    <Element className="Box Box--red" name="box-red">
                        This is the red box
                    </Element>
                </div>
            </div>
        )
    }

    scrollToTop() {
        animateScroll.scrollToTop();
    }
    scrollToBottom() {
        animateScroll.scrollToBottom();
    }
    scrollTo() {
        animateScroll.scrollTo(100);
    }
    scrollMore() {
        animateScroll.scrollMore(100);
    }
    handleSetActive(to) {
        console.log(to);
    }
}

export default ScrollSection
