import React, { useState } from 'react';
import { PageWrapper, Board, Goal, Cup, Row1, Row2 } from './Main.styles';
import { defaultBoardState } from '../utils';

const Main = () => {
    const [positions, setPositions] = useState([...defaultBoardState]);

    const row1Positions = positions.filter(position => position?.row === 1);
    const row2Positions = positions.filter(position => position?.row === 2);

    const buildPositions = row => (
        row.map(position => (
            position?.pitType === 'goal'
                ? <Goal />
                : <Cup />
        ))
    )

    return (
        <PageWrapper>
            <Board>
                <Row1>{buildPositions(row1Positions)}</Row1>
                <Row2>{buildPositions(row2Positions)}</Row2>
            </Board>
        </PageWrapper>
    );
};

export default Main;
