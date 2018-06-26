import React from 'react';
import '../styles/quick-donate.css';

const QuickDonate = () => (
    <div className="quick-donate">
        <h1>Help Today.</h1>
        <form>
            <div style={{ background: 'white', color: 'black', flex: 1, display: 'flex', alignItems: 'center' }}>
                <i className="material-icons">
                    attach_money
                </i>
            </div>
            <input 
                type="text"
            />
        </form>
    </div>
);

export default QuickDonate;