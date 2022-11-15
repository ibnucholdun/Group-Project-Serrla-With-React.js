import React from 'react'
import PropTypes from 'prop-types'

const InputText = ({valueLabel, valueFor, type, id, name, placeholder, minLength}) => {
    return (
        <div className="mb-3">
            <label htmlFor={valueFor} className="form-label mb-0">{valueLabel}</label>
            <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} required minLength={minLength}/>
        </div>
    )
}

InputText.propTypes = {
    valueLabel: PropTypes.string.isRequired,
    valueFor: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    minLength: PropTypes.number
}

export default InputText