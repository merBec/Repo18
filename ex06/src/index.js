let rockStar = new Map();

rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map();

[...rockStar.keys()]
  .filter((key) => !key.includes("a"))
  .forEach((key) => {
    newRock.set(key, rockStar.get(key));
  });

console.log(newRock);

module.exports = { rockStar, newRock };
