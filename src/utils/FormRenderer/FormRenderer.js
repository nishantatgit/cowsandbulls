import React, { useEffect, useState } from 'react';

import Input from '../../components/atoms/Input/Input';
import Submit from '../../components/atoms/Submit/Submit';

import formValidator from './formValidator';

const fieldMapper = {
    'text' : Input,
    'submit': Submit
}

function FormRenderer(props){
    const { 
            formFields,  
            id, 
            formClass, 
            onSubmit,
            validateOnSubmit = true
          } = props;

    let [ formFieldValues, setFormFieldValues ] = useState({});
    let [ errors, setErrors ] = useState({});
    let [ submitCount, setSubmitCount ] = useState(0);

    const validateForm = () => {
        const errors = formValidator(formFields, formFieldValues);
        const formHasError = formFields.some(ff => {
            const err = errors[ff.name];
            if(err && err.hasError){
                return true;
            }
            return false;
        })
        setErrors({...errors});
        if(formHasError){
            console.error('form has errors ...');  
            return false;
        }
        return true;
    }

    const setInitialValues = () => {
        const fieldValues = {};
        formFields.forEach(field => {
            const { name, initialValue } = field;
            fieldValues[name] = initialValue;
        });
        setFormFieldValues({...fieldValues});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let isFormValid = true;

        if(validateOnSubmit){
            isFormValid = validateForm();
        }

        if(onSubmit && isFormValid){
            onSubmit(formFieldValues);
            setSubmitCount(submitCount + 1);
        }
    }

    const onChangeHandler = (name,value) => {
        formFieldValues[name] = value
    }

    useEffect(setInitialValues,[formFields]);

    return (
        <form id={id} className={formClass} noValidate onSubmit={onSubmitHandler}>
            {formFields.map( formField => {
                const { type } = formField;
                const Component = fieldMapper[type];
                const error = errors[formField.name];
                return <Component 
                            onChange={onChangeHandler} 
                            {...formField}
                            error={error} 
                            submitCount={submitCount}
                            key={formField.name}
                        />
            })}
        </form>
    );
}

export default FormRenderer;