import { getNextCupPosition, shouldPreventClick } from './utils';

describe('Utilities', () => {
    describe('getNextCupPosition()', () => {
        test('should skip player 2 mancala if player 1 turn and position is 12', () => {
            const player1Turn = true;
            const position = 12;
            expect(getNextCupPosition(player1Turn, position)).toEqual(0);
        });

        test('should move next to the 0 position during player 2 turn from player 2 mancala', () => {
            const player1Turn = false;
            const position = 13;
            expect(getNextCupPosition(player1Turn, position)).toEqual(0);
        });

        test('should skip player 1 mancala during player 2 turn if position is 5', () => {
            const player1Turn = false;
            const position = 5;
            expect(getNextCupPosition(player1Turn, position)).toEqual(7);
        });

        test('should just iterate to the next consecutive position in any other scenario', () => {
            const player1Turn = true;
            const position = 4;
            expect(getNextCupPosition(player1Turn, position)).toEqual(5);
            expect(getNextCupPosition(false, position)).toEqual(5);
            expect(getNextCupPosition(false, 12)).toEqual(13);
            expect(getNextCupPosition(player1Turn, 10)).toEqual(11);
        });
    });

    describe('shouldPreventClick()', () => {
        test('should prevent click when player 1 turn and the position clicked was on row 2', () => {
            const player1Turn = true;
            const position = 6;
            expect(shouldPreventClick(player1Turn, position)).toBeTruthy();
        });
        test('should not prevent click when player 1 turn and the position clicked was on row 1', () => {
            const player1Turn = true;
            const position = 4;
            expect(shouldPreventClick(player1Turn, position)).toBeFalsy();
        });
        test('should prevent click when player 2 turn and the position clicked was on row 1', () => {
            const player1Turn = false;
            const position = 2;
            expect(shouldPreventClick(player1Turn, position)).toBeTruthy();
        });
        test('should not prevent click when player 2 turn and the position clicked was on row 2', () => {
            const player1Turn = false;
            const position = 10;
            expect(shouldPreventClick(player1Turn, position)).toBeFalsy();
        });
    });
});