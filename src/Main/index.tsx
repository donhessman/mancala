import React, { useState, useEffect } from 'react';
import {
    GlobalStyle,
    Header,
    Logo,
    ScoreBoard,
    ScoreLabel,
    ScorePlayer,
    ScoreNumber,
    Score,
    PageWrapper,
    Board,
    Goal,
    Goal2,
    Cup,
    Count,
    Rows,
    Row1,
    Row2,
    Player1Info,
    Player2Info,
    PlayerArrow,
} from './Main.styles';
import { defaultBoardState, defaultTurnState } from '../config';
import { getNextCupPosition, shouldPreventClick, shouldAwardExtraTurn } from '../utils';

const Main = () => {
    const player1 = 'player1';
    const player2 = 'player2';
    // States
    interface TurnInProgress {
        inPlay: boolean;
        count: number;
        position: number;
        awardExtraTurn?: boolean;
    }

    interface Position {
        pitType: string;
        count: number;
        row: number;
        position: number;
    }

    const [positions, setPositions] = useState(defaultBoardState);
    const [player1Turn, setplayer1Turn] = useState(true);
    const [turnInProgress, setTurnInProgress] = useState<TurnInProgress>(defaultTurnState);
    const [gameInProgress, setGameInProgress] = useState(false);

    // Split up the positions between the 2 rows
    const row1Positions: Position[] = positions.filter(position => position.row === 1);
    const row1Goal: Position | undefined = row1Positions.pop();
    const row2Positions: Position[] = positions.filter(position => position.row === 2);
    const row2Goal: Position | undefined = row2Positions.pop();


    const handleCupClick = (position: number, count: number) => {
        if (shouldPreventClick(player1Turn, position)) return false;
        if (!gameInProgress) setGameInProgress(true);
        setTurnInProgress({
            inPlay: true,
            count,
            position
        });
        const newPositions = [...positions];
        const index = newPositions.findIndex(p => p.position === position);
        newPositions[index].count = 0;
        setPositions(newPositions); // Clear all pieces from selected cup
    };

    useEffect(() => {
        const { inPlay, count, position } = turnInProgress;
        if(inPlay) {
            // positions have been updated and a turn is still in play
            setTimeout(() => {
                // Add a bead to the next cup
                const nextCupPosition = getNextCupPosition(player1Turn, position);
                const nextPositions = [...positions];
                const index = nextPositions.findIndex(p => p.position === nextCupPosition);
                nextPositions[index].count++;

                const awardExtraTurn = shouldAwardExtraTurn(player1Turn, position, count);
                // reduce count in hand and move to next position
                setTurnInProgress({
                    inPlay: count > 1 && !awardExtraTurn,
                    count: count - 1,
                    position: count > 1 ? nextCupPosition : position,
                    awardExtraTurn
                })
                setPositions(nextPositions);
            }, 500);
        }
    },[positions]);

    useEffect(() => {
        const { inPlay, awardExtraTurn } = turnInProgress;
        if (gameInProgress && !inPlay && !awardExtraTurn) {
            setplayer1Turn(!player1Turn);
        }
    },[turnInProgress?.inPlay]);

    const buildPositions = (row: Position[]) => (
        row.map(position => (
            <Cup key={position.position}>
                <Count onClick={() => handleCupClick(position.position, position.count)}>{position.count}</Count>
            </Cup>
        ))
    );

    return (
        <>
            <GlobalStyle />
            <Header>
                <PageWrapper>
                    <Logo>MANCALA!</Logo>
                    <ScoreBoard>
                        <ScoreLabel>SCORE</ScoreLabel>
                        <Score isPlayer1={true}><ScorePlayer>Player 1:</ScorePlayer> <ScoreNumber isPlayer1={true}>{row1Goal?.count || 0}</ScoreNumber></Score>
                        <Score><ScorePlayer>Player 2:</ScorePlayer> <ScoreNumber>{row2Goal?.count || 0}</ScoreNumber></Score>
                    </ScoreBoard>
                </PageWrapper>
            </Header>
            <PageWrapper>
                {player1Turn && <Player1Info>&larr; Player 1&apos;s Turn</Player1Info>}
                <Board>
                    <Goal><Count>{row1Goal?.count}</Count></Goal>
                    <Rows>
                        <Row1>{buildPositions(row1Positions)}</Row1>
                        <Row2>{buildPositions(row2Positions)}</Row2>
                    </Rows>
                    <Goal2><Count>{row2Goal?.count}</Count></Goal2>
                </Board>
                {!player1Turn && <Player2Info>Player 2&apos;s Turn &rarr;</Player2Info>}
            </PageWrapper>
        </>
    );
};

export default Main;
