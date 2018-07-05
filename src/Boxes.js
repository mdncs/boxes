import React from 'react';
import { sample } from 'lodash';
import Box from './Box';

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

    // if boxes are not allowed to overlap at any point

    shuffle = () => {

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
        const { redBox, blueBox } = this.state;
        return (
            <div className="container">
                <div className="box-container">
                    <div className="box red" style={{ left: redBox.left, top: redBox.top }}>
                        <Box left={redBox.left} top={redBox.top} />
                    </div>
                    <div className="box blue" style={{ left: blueBox.left, top: blueBox.top }}>
                        <Box left={blueBox.left} top={blueBox.top} />
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
