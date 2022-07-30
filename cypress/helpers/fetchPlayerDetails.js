const WICKET_KEEPER = 'Wicket-keeper';
const TEAM_NAME_INDIA = 'India';

export function fetchForeignPlayerCount(playerList) {
    let playerCount = 0;
    playerList.forEach(playerDetails => {
        if (playerDetails.country != TEAM_NAME_INDIA) {
            playerCount++;
        }
    });
    return playerCount;
}


export function fetchWicketKeeperCount(playerList) {
    let playerCount = 0;
    playerList.forEach(playerDetails => {
        if (playerDetails.role === WICKET_KEEPER) {
            playerCount++;
        }
    });
    return playerCount;
}