import React from 'react';

function Submit(props){
    const { label, className } = props;
    return <input className={className} type="submit" value={label}  />
}

export default Submit;