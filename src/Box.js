import React from 'react';

class Box extends React.Component {

    render () {
        const { left, top } = this.props;
        return <div className="box">
            <span className="box-label">
                left: {left} top: {top}
            </span>
        </div>
    }
}
export default Box;