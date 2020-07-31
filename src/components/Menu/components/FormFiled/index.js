import React from 'react';

function FormField({type,value,name, onChange,texto}) {
    return(
    <div>
        <label>
        {texto}
        <input
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