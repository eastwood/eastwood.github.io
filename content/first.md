+++
author = "eastwd"
comments = false
draft = false
slug = "secret-santa"
title= "Mythic Secret Santa"
+++

Christmas is upon us! I've decided to run a little secret santa for my WOW guild. The rules are pretty simple:

1. Minimum spend of 20g
2. My character "mythicsanta" will contact each of the participants with the name of whom they'll be Santa for
3. Each participant will send "mythicsanta" the gift before the 22nd December
4. On christmas, I'll proxy the gifts through to each of the recipients as "Santa".
5. I will not be participating because I don't want to be biased and I need to be the sole orchestrator to not ruin the magic.

Participants:

- Bicboi
- AmeliaRose
- Epoch
- AtomicBoogie
- lightofsin
- Scorcia
- Jooju
- Liltiddies
- Tremendous
- HoneyBadger
- BnK
- Lam Broll
- Roliviane
- Pokeadot
- Umbral
- MiniKoala

{{< random_seed >}}

### Secret Santa Algorithm (verifiable for later)

```javascript
Math.seedrandom("Mythic Secret Santa Seed, love Xanic");

players = [
  "Bicboi",
  "AmeliaRose",
  "Epoch",
  "AtomicBoogie", "lightofsin",
  "Scorcia",
  "Jooju",
  "Liltiddies",
  "Tremendous",
  "HoneyBadger",
  "BnK",
  "Lam Broll",
  "Roliviane",
  "Pokeadot",
  "Umbral",
  "MiniKoala"
];

randomly_sorted = players.sort((a, b) => 0.5 - Math.random());

console.log("Secret santa list:\n");
randomly_sorted.forEach(p => {
  console.log(p);
});
```

The output of this (again, you can verify this in the console on this page) is:

```javascript
Epoch -> AmeliaRose -> Bicboi -> MiniKoala -> BnK -> HoneyBadger -> AtomicBoogie -> Pokeadot -> Liltiddies -> lightofsin -> Umbral -> Tremendous -> Scorcia -> Jooju -> Lam Broll -> Roliviane -> Epoch
```

Where `x -> y` means `x` is `y's` santa. As an example, `Epoch` gives Amelia a gift, and Amelia gives `Bicboi` a gift etc.

