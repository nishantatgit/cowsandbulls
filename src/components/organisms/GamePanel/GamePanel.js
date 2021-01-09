import React from 'react';
import UserInputForm from '../../molecules/UserInputForm/UserInputForm';

const GamePanel = (props) => {
    const { setUserInputs } = props;

    return <div className="game-panel"><UserInputForm onSubmit={setUserInputs} /></div>
}

export default GamePanel;