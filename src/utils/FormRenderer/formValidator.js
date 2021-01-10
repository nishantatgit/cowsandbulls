const checkValue = (value,validations) => {
    const error = {
        hasError: true
    };

    if(validations.required && (value === undefined || value === '' || value === null)){
        error.errMsg = validations.required.errMsg;
        return error;
    }
    if(validations.value && validations.value.val === 'number' &&  !(/^[0-9]*$/.test(value))) {
        error.errMsg = validations.value.errMsg;
        return error;
    }
    if(validations.minLength && value.length < validations.minLength.val){
        error.errMsg = validations.minLength.errMsg;
        return error;
    }
    if(validations.maxLength && value.length > validations.maxLength.val){
        error.errMsg = validations.maxLength.errMsg;
        return error;
    }
    error.hasError = false;
    return error;
}

const formValidator = (formFields, formFieldValues) => {
    const errors = {};
    formFields.forEach( ff => {
        if(ff.validate){
            const formValue = formFieldValues[ff.name];
            const err = checkValue(formValue,ff.validate);
            if(err.hasError){
                errors[ff.name] = err;
            }
        }
    });
    return errors;
}

export default formValidator;

