import React, { useCallback, useState, useEffect } from 'react';

import GamePanel from '../GamePanel/GamePanel';
import ResultPanel from '../ResultPanel/ResultPanel';

import generateRandomSequence from '../../../utils/generateRandomSequence';
import constants from '../../../constants/constants';
import gameFormFields from '../../../constants/gameFormFields';
import content from '../../../constants/content';

import './Game.scss';

const Game = () => {
    const [ userInputs, updateUserInputs ] = useState([]);
    const [ answerSequence, setAnswerSequence] = useState(null);
    const [ gameInProgress, setGameInProgress ] = useState(false);
    const [ gameFinished, setGameFinished ] = useState(false);
    
    const setUserInputs = useCallback((formFields) => {
        const inputValue = formFields[gameFormFields[0].name];
        updateUserInputs([...userInputs, inputValue]);
    },[]);

    useEffect(() => {
        const randomSequence = generateRandomSequence(constants.sequenceLength);
        console.info('randomSequence ', randomSequence);
        setAnswerSequence(randomSequence);
    }, []);

    const startButtonHandler = () => {
        setGameInProgress(true);
    }

    const finishGame = useCallback(()=> {
        console.log('game finished ....');
        setGameFinished(true);
    },[])

    return (   
                <>
                    { 
                        !gameInProgress && !gameFinished && (
                            <>
                                <button className="button" onClick={startButtonHandler}>
                                    {content.startLabel}
                                </button>
                                <p className="instruction">{content.instruction}</p> 
                            </>
                        ) 
                    }
                    {
                        gameFinished && <p>{content.result.congratsText}</p>
                    }
                    {
                        gameInProgress &&  (
                            <div className="game-play">
                                { !gameFinished && <GamePanel setUserInputs={setUserInputs} /> }
                                { !!userInputs.length && <ResultPanel userInputs={userInputs} answerSequence={answerSequence} callback={finishGame} /> }
                            </div>)
                    }
                </>
            )
}

export default Game;
