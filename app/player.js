const player = (name) => ({ name });
const getName = ({ name }) => name;
const claim = (player) => (obj) => Object.assign(obj, { player: player });

module.exports = player;
module.exports.getName = getName;
module.exports.claim = claim;