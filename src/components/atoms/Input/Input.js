import React, {useState, useEffect} from 'react';

function Input(props){
    const { type, onChange, onBlur, label, initialValue, className, placeholder, name } = props;
    const [value, setValue ] = useState(initialValue);
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const onBlurHandler = (e) => {
        if(onBlur){
            onBlur(value);
        }
    }

    useEffect(
        () => {
            if(onChange){
                onChange(name,value);
            }
        },[ value ]
    )

    return  <div className="input-group mt-8 flex flex-col">
                <label htmlFor={label} className="block mb-1 text-xl font-medium w-3/4 m-auto">{label}</label>
                <input 
                    className={className}
                    type={type} 
                    id={label} 
                    onChange={e => onChangeHandler(e)}
                    onBlur={e => onBlurHandler(e)} 
                    value={value}
                    name={name}
                    placeholder={placeholder}
                />
            </div>
}

export default Input;