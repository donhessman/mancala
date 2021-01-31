export const getNextCupPosition = (player1Turn, position) => {
    if (position === 12 && player1Turn) return 0;
    if (position === 13 && !player1Turn) return 0;
    if (position === 5 && !player1Turn) return 7;
    return position + 1;
};

export const shouldPreventClick = (player1Turn, position) => (
    (player1Turn && position > 5) || (!player1Turn && position < 7)
)