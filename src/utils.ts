export const getNextCupPosition = (player1Turn: boolean, position: number) => {
    if (position === 12 && player1Turn) return 0;
    if (position === 13 && !player1Turn) return 0;
    if (position === 5 && !player1Turn) return 7;
    return position + 1;
};

export const shouldPreventClick = (player1Turn: boolean, position: number) => (
    (player1Turn && position > 5) || (!player1Turn && position < 7)
);

export const shouldAwardExtraTurn = (player1Turn: boolean, position: number, count: number) => {
    if (count !== 1) return false;
    if (player1Turn && position === 5) return true;
    if (!player1Turn && position === 12) return true;
    return false;
};
