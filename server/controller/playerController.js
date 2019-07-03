const players = [{
    id: 1,
    name: "josh",
    campus: "phoenix",
    role: "PING PONG GOD",
    wins: 0,
    losses: 0
}];

let id = 2;
module.exports = {
    cheetahAllPlayers: (req, res, next) => {
        res.status(200).send(players)
    },

    woodpeckerPlayer: (req, res, next) => {
        const { name, campus, role } = req.body;
        players.push({
            id: id,
            name,
            campus,
            role,
            wins: 0,
            losses: 0
        })
        id++
        res.status(200).send(players);
    },

    beaverDam: (req, res, next) => {
        // http://localhost:3008/api/beaver
        const idToUpdate = req.params.id;
        // match will be a boolean, true if won, false if lost
        const { match } = req.query;

        const playerIndex = players.findIndex((player) => {
            return player.id == idToUpdate;
        });
        if(playerIndex === -1){
            res.status(404).send("player not found");
        } else {
            if(match === "true"){
                players[playerIndex].wins++
            } else{
                players[playerIndex].losses++
            }
        }   res.status(200).send(players);
        players[playerIndex]
    },

    hungryVulture: (req, res, next) => {

    }

}