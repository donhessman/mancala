import styled from 'styled-components';

export const PageWrapper = styled.main`
    margin: 0 auto;
    
    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`;

export const Board = styled.section`
    background: url('/img/wood-grain.jpg') repeat-x 0 0;
    position: relative;
    height: 366px;
    width: 1150px;
`;

export const Goal = styled.div`
    box-shadow:3px -1px 30px rgb(78,37,13,0.9) inset;
    border-radius: 60px;
    height: 300px;
    width: 100px;
`;

export const Cup = styled.div`
    box-shadow:3px -1px 30px rgb(78,37,13,0.9) inset;
    border-radius: 60px;
    height: 100px;
    width: 100px;
`;

export const Row1 = styled.div`
    align-items: flex-start;
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    left: 0;
    position: absolute;
    padding: 30px 0 0 0;
    top: 0;
    width: 88%;
`;

export const Row2 = styled(Row1)`
    align-items: flex-end;
    bottom: 0;
    flex-direction: row-reverse;
    left: unset;
    height: calc(100% - 30px);
    padding: 0 0 30px 0;
    right: 0;
    top: unset;
`;
