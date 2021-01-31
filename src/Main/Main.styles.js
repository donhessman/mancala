import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const Header = styled.header`
    background: #f4a261;
    margin-bottom: 100px;
    padding: 15px 0;
`;

export const Logo = styled.h1`
    color: #fff;
    margin: 0;
`;

export const PageWrapper = styled.main`
    margin: 0 auto;
    position: relative;
    
    @media (min-width: 1150px) {
        max-width: 1150px;
    }
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
    box-shadow:3px -1px 30px 
    rgba(78,37,13,0.9) inset;
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
    color: #2a9d8f;
    font-size: 25px;
    padding: 15px 0;
    position: absolute;
    top: -60px;
    right: 0;
    text-align: right;
`;

export const Player2Info = styled.div`
    color: #e76f51;
    font-size: 25px;
    padding: 15px 0;
`;

export const PlayerArrow = styled.span`
    font-size: 35px;
`;
