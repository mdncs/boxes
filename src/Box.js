import React from 'react';

// to make the boxes more reusable, function to create standard box

function Box (props) {

        const { left, top } = props;
        return <div className="box">
            <span className="box-label">
                left: {left} top: {top}
            </span>
        </div>
}
export default Box;