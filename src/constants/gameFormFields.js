export default [
    {
        type: 'text',
        name: 'user-guess-input',
        initialValue: '',
        label: 'Enter Your Guess',
        validate: {
            required: { val : true, errMsg: 'Please enter some value'},
            maxLength: { val : 4, errMsg: 'Value should not be greater than 4'},
            minLength: { val: 4, errMsg: 'Value should not be less than 4'},
            value: { val: 'number', errMsg: 'Value must be a number'}
        }
    },
    {
        type: 'submit',
        label: 'Check',
        defaultPrevented: true
    }
]