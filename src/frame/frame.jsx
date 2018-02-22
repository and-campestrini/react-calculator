import React from 'react'
import './frame.css'
import Button from '../button/button'

export default class Frame extends React.Component {

    getNumbers() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }

    render() {
        return (
            <div className="frame">
                <div className="row margin-bottom-10">
                    <div className="twelve columns" style={{background: 'purple'}}>
                        display
                    </div>
                </div>

                <div className="row">
                    <div className="ten columns" style={{background: 'blue'}}>
                        {this.getNumbers().map(number => <Button>{number}</Button>)}
                    </div>

                    <div className="two columns" style={{background: 'green'}}>
                        ops
                    </div>
                </div>
            </div>
        )
    }

}
