import React from 'react';
import './styles.css'

function FormField({type,value,name, onChange,texto}) {
    return(
    <div>
        <label>
        {texto}
        <input className="input"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
                      />
          </label>   
    </div>
    )
}

export default FormField;