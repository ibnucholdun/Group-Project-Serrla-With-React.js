import React from 'react'

const InputCheckbox = ({name, value, id, htmlFor}) => {
  return (
    <>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value={value} id={id}/>
            <label className="form-check-label" htmlFor={htmlFor}> {name} </label>
        </div>
    </>
  )
}

export default InputCheckbox