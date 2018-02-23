import React from 'react'
import './frame.css'
import Button from '../button/button'

export default class Frame extends React.Component {

    getNumbers() {
        return [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    }

    render() {
        return (
            <div className="frame col">
                <div className="row margin-bottom-10">
                    <div className="col-12" style={{background: 'purple'}}>
                        display
                    </div>
                </div>

                <div className="row">
                    <div className="col-10" style={{background: 'blue'}}>
                        <div className="row">
                            {this.getNumbers().map(number => <Button>{number}</Button>)}
                        </div>
                    </div>

                    <div className="col-2" style={{background: 'green'}}>
                        ops
                    </div>
                </div>
            </div>
        )
    }

}
