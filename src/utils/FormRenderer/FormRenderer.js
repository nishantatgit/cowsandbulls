import React, { useEffect, useState } from 'react';

import Input from '../../components/atoms/Input/Input';
import Submit from '../../components/atoms/Submit/Submit';

const fieldMapper = {
    'text' : Input,
    'submit': Submit
}

function FormRenderer(props){
    console.log('props ', props);
    const { formFields,  
            id, 
            formClass, 
            onSubmit
          } = props;

    const [ isValid, setValid ] = useState(false);
    const [ isTouched, setTouched ] = useState(false);

    const formFieldValues = {};
    
    const setInitialValues = () => {
        formFields.forEach(field => {
            const { name, initialValue } = field;
            formFieldValues[name] = initialValue;
        });
        console.log('formFields', formFields);
        console.log('formFieldValues', formFieldValues);
    }

    const onSubmitHandler = (e) => {
        console.log('on submit called with form values ', formFieldValues);

        e.preventDefault();

        if(onSubmit){
            onSubmit(formFieldValues);
        }
    }

    const onChangeHandler = (name,value) => {
        formFieldValues[name] = {
            value,
            touched: true
        }
    }

    useEffect(setInitialValues,[formFields]);

    return <form id={id} className={formClass} noValidate onSubmit={onSubmitHandler}>
        {formFields.map( formField => {
            const { type } = formField;
            const Component = fieldMapper[type];

            return <Component 
                        onChange={onChangeHandler} 
                        {...formField} 
                    />
        })}
    </form>

}

export default FormRenderer;