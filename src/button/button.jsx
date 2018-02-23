import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return (
        <div className="col-4">{props.children}</div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
