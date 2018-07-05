import React from 'react';
import { sample } from 'lodash';

class Boxes extends React.Component {
    constructor() {
        super();
        this.state = {
            redBox: {
                left: '0px',
                top: '0px'
            },
            blueBox: {
                left: '0px',
                top: '50px'
            }
        }
    }

    shuffle = () => {
        // TODO: using react state, shuffle .box's to
        // new random positions within .box-container and update
        // labels

        const sizeArr = [50, 100, 150, 200, 250];
        const blue = {
            left: sample(sizeArr),
            top: sample(sizeArr)
        };
        const red = {
            left: sample(sizeArr),
            top: sample(sizeArr)
        }
        if (red.left === blue.left && red.top === blue.top) {
            this.shuffle()
        } else {
            this.setState({
                redBox: {
                    left: `${blue.left}px`,
                    top: `${blue.top}px`
                },
                blueBox: {
                    left: `${red.left}px`,
                    top: `${red.top}px`
                }
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="box-container">
                    <div className="box red" style={{ left: this.state.redBox.left, top: this.state.redBox.top }}>
                        <span className="box-label">
                            left: {this.state.redBox.left} top: {this.state.redBox.top}
                        </span>
                    </div>
                    <div className="box blue" style={{left: this.state.blueBox.left, top: this.state.blueBox.top}}>
                        <span className="box-label">
                            left: {this.state.blueBox.left} top: {this.state.blueBox.top}
                        </span>
                    </div>
                </div>
                <button
                    className="button shuffle"
                    onClick={this.shuffle}>
                    Shuffle!
        </button>
            </div>
        );
    }
}

export default Boxes;
