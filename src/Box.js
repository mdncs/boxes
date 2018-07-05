import React from 'react';

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            left: 0,
            top: 0
        }
    }

    render () {
        return <div className="box">
            <span className="box-label">
                left: {this.state.left} top: {this.state.top}
            </span>
        </div>
    }
}
export default Box;