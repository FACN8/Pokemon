function getMove(name) {
    return window
        .fetch(`https://pokeapi.co/api/v2/move/${name}`)
        .then(res => {
            if (!res.ok) throw new Error("HTTP error");
            return res;
        })
        .then(res => res.json());
}

module.exports = { getMove };