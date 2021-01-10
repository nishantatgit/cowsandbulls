import React from 'react';
import UserInputForm from '../../molecules/UserInputForm/UserInputForm';

import './GamePanel.scss';

const GamePanel = (props) => {
    const { setUserInputs } = props;

    return <div className="game-panel"><UserInputForm onSubmit={setUserInputs} /></div>
}

export default GamePanel;