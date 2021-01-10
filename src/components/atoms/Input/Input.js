import React, {useState, useEffect} from 'react';

function Input(props){
    const { type, onChange, onBlur, label, initialValue, className, placeholder, name, error = {}, submitCount } = props;
    const { hasError, errMsg } = error;
    
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

    useEffect(() => {
        setValue(initialValue);
    },[submitCount])

    return  <div className="input-group">
                <label htmlFor={label}>{label}</label>
                <input 
                    className={`${className} ${hasError ? 'error' : ''}`} 
                    type={type} 
                    id={label} 
                    onChange={e => onChangeHandler(e)}
                    onBlur={e => onBlurHandler(e)} 
                    value={value}
                    name={name}
                    placeholder={placeholder}
                />
                { hasError && <span className="error">{errMsg}</span> }
            </div>
}

export default Input;