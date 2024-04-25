// exemplul folosind functia, asa i ca e mai bum? :D

const createPlayer = (name, hp, mp, items) => {
    return{
        name: name,
        hp: hp,
        mp: mp,
        items: items,
    };
}

const hanSolo = createPlayer(
    "Hansolo",
    100,
    10,
    "Blaster"
)
console.log(hanSolo);

const darthVader = createPlayer(
    "DarthVader",
    100,
    9,
    "Bazooka xD"
)
console.log(darthVader);