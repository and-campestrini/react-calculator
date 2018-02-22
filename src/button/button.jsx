import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return (
        <div className="four columns">{props.children}</div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
