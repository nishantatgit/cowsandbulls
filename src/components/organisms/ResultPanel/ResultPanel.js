import React, { useEffect, useState } from 'react';

import Table from '../../molecules/Table/Table';

import getObjectFromSequence from '../../../utils/getObjectFromSequence';
import compareSequenceObjects from '../../../utils/compareSequenceObjects';
import getResultString from '../../../utils/getResultString';

import resultHeader from './resultHeader';

const ResultPanel = (props) => {
    const  { answerSequence, userInputs } = props;
    let [ answerObject, setAnswerObject ] = useState(null);
    let [ userInputObject, setUserInputObject ] = useState(null);
    let [ results, setResults ] = useState([]);

    useEffect(() => {
        console.log('answerSequence: ', answerSequence);
        if(answerSequence){
            setAnswerObject(getObjectFromSequence(answerSequence))
        }
        
    }, [answerSequence]);

    useEffect(() => {
        if(userInputs.length){
            const userInput = userInputs[userInputs.length - 1];
            setUserInputObject(getObjectFromSequence(userInput));
        }
    }, [userInputs]);

    useEffect(() => {
        if(userInputObject){
            const resultObject = compareSequenceObjects(answerObject, userInputObject);
            const resultString = getResultString(resultObject);
            setResults([...results, [results.length,userInputs[userInputs.length - 1], resultString ]]);
        }
    }, [userInputObject])

    return <Table data={{ headers: resultHeader, rows: results }} /> 
}

export default ResultPanel;