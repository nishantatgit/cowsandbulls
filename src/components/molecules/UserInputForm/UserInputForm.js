import React from 'react';
import FormRenderer from '../../../utils/FormRenderer/FormRenderer';
import formFields from '../../../constants/gameFormFields';

import './UserInputForm.scss';

const UserInputForm = (props) => {
    const { onSubmit } = props;

    return <FormRenderer 
                className="user-input-form" 
                id="guess-input" 
                formFields={formFields} 
                onSubmit={onSubmit}
                validateOnSubmit
            />
}

export default UserInputForm; 