import '../styles/page.css';
import React from 'react';
import Carousel from './Carousel';

class ProgramsPage extends React.Component {
    render() {
        const { backgroundStyle } = this.props;

        const style = {
            color: 'white',
            ...backgroundStyle
        };

        return (
            <div className="page">
                <div className="page__content page__content--centered page__content--programs" style={style}>
                    <h1 className="page__content__header">Programs</h1>
                    <p>
                        In Value Life foundation two types of programs are structured and implemented: Human Relief Program
                        (HRP) and Social Development Programs (SDP).  The HRPs involve assisting needy victims in hardships
                        or tragedies.  Assistance can be in the form of food supplies, medical aid, shelter, and clothing.
                        The SDPs however cover social and  educational services.  VLF specializes in helping children, the
                        elderly, the homeless, and the illiterate.  Programs are carried out through the following projects:
                    </p>
                </div>
                <div className="projects">
                    <Carousel switchColor={'white'} items={[
                        <div className="page__content">
                            <h1 className="page__content__header">Current</h1>
                            <ul>
                                <li>Needy Families (NF)</li>
                                <li>Orphan Support (OS)</li>
                            </ul>
                        </div>,
                        <div className="page__content">
                            <h1 className="page__content__header">Future</h1>
                            <ul>
                                <li>Know Government Aid Programs (KGAP)</li>
                                <li>Support Needy Students (SNS)</li>
                            </ul>
                        </div>
                    ]}/>
                </div>
            </div>
        );
    }
}

export default ProgramsPage;
