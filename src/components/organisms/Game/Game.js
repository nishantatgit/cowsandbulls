import React, { useCallback, useState, useEffect } from 'react';
import GamePanel from '../GamePanel/GamePanel';
import ResultPanel from '../ResultPanel/ResultPanel';
import generateRandomSequence from '../../../utils/generateRandomSequence';
import constants from '../../../constants/constants';
import gameFormFields from '../../../constants/gameFormFields';

const Game = (props) => {
    const [ userInputs, updateUserInputs ] = useState([]);
    const [ answerSequence, setAnswerSequence] = useState(null);
    
    const setUserInputs = useCallback((formFields) => {
        const inputValue = formFields[gameFormFields[0].name].value;
        console.log('inputValue', inputValue); 
        updateUserInputs([...userInputs, inputValue]);
    },[]);

    useEffect(() => {
        const randomSequence = generateRandomSequence(constants.sequenceLength);
        console.log('randomSequence ', randomSequence);
        setAnswerSequence(randomSequence);
    }, []);
    return (<>
            <GamePanel setUserInputs={setUserInputs} />
            { !!userInputs.length && <ResultPanel userInputs={userInputs} answerSequence={answerSequence}/> }
           </>)
}

export default Game;
