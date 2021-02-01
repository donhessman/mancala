import styled, { createGlobalStyle } from 'styled-components';
const player1Color = '#2a9d8f';
const player2Color = '#e76f51';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const PageWrapper = styled.main`
    margin: 0 auto;
    position: relative;
    
    @media (min-width: 1150px) {
        max-width: 1150px;
    }
`;

export const Header = styled.header`
    background: #f4a261;
    margin-bottom: 100px;
    padding: 15px 0;

    ${PageWrapper} {
        display: flex;
        justify-content: space-between;
    }
`;

export const Logo = styled.h1`
    color: #fff;
    font-size: 48px;
    margin: 0;
    max-width: 300px;
`;

export const ScoreBoard = styled.div`
    background: #e9c46a;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    width: 450px;
`;

export const ScoreLabel = styled.div`
    color: #fff;
    font-size: 30px;
    text-align: center;
`;

export const Score = styled.div`
    align-items: center;
    color: #fff;
    background: ${({ isPlayer1 }) => isPlayer1 ? player1Color : player2Color};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 2px 8px;
    width: 130px;
`;

export const ScorePlayer = styled.span`
    font-style: italic;
    font-size: 22px;
`;

export const ScoreNumber = styled.span`
    background: #fff;
    border-radius: 5px;
    color: ${({ isPlayer1 }) => isPlayer1 ? player1Color : player2Color};
    line-height: 0.95;
    padding: 0 3px;
    font-weight: 500;
    font-size: 28px;
`;

export const Board = styled.section`
    align-items: center;
    justify-content: space-evenly;
    background: url('img/wood-grain.jpg') repeat-x 0 0;
    display: flex;
    height: 366px;
    padding: 0 30px;
    width: 1090px;
`;

export const Goal = styled.div`
    align-items: center;
    box-shadow:3px -1px 30px rgba(78,37,13,0.9) inset;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    height: 300px;
    width: 100px;
`;

export const Cup = styled.div`
    align-items: center;
    box-shadow:3px -1px 30px rgba(78,37,13,0.9) inset;
    border-radius: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100px;
`;

export const Count = styled.span`
    background: rgba(42,157,143,0.75);
    border-radius: 30px;
    color: #fff;
    padding: 15px 24px;
    font-size: 25px;
`;

export const Goal2 = styled(Goal)`
    ${Count} {
        background: rgba(231,111,81,0.75);
    }
`;

export const Rows = styled.div`
    justify-content: space-around;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const Row1 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
`;

export const Row2 = styled(Row1)`
    flex-direction: row;
    ${Count} {
        background: rgba(231,111,81,0.75);
    }
`;

export const Player1Info = styled.div`
    color: ${player1Color};
    font-size: 25px;
    padding: 15px 0;
    position: absolute;
    top: -60px;
    right: 0;
    text-align: right;
`;

export const Player2Info = styled.div`
    color: ${player2Color};
    font-size: 25px;
    padding: 15px 0;
`;

export const PlayerArrow = styled.span`
    font-size: 35px;
`;
