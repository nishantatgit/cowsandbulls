import React, { useState } from 'react';
import FormRenderer from '../../../utils/FormRenderer/FormRenderer';
import formFields from '../../../constants/gameFormFields';
const UserInputForm = (props) => {
    const { onSubmit } = props;
    console.log('onSubmit ', onSubmit);
    return <FormRenderer className="user-input-form" id="guess-input" formFields={formFields} onSubmit={onSubmit} />
}

export default UserInputForm; 