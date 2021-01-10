import React from 'react';

import Game from '../../components/organisms/Game/Game';

import content from '../../constants/content';

import './Homepage.scss';

const HomePage = (props) => {
    return (<main className="homepage">
        <h1 className="header">{content.mainHeader}</h1>
        <Game />
    </main>)
}

export default HomePage;