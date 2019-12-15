+++
author = "eastwd"
comments = false
draft = false
slug = "secret-santa"
title= "Mythic Secret Santa"
date = 2019-12-16
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
for (let i = 0; i < randomly_sorted.length; i++) {
  console.log(`${randomly_sorted[i]} => ${randomly_sorted[(i+1) % randomly_sorted.length]}`);
}
```

The output of this (again, you can verify this in the console on this page) is:

```javascript
Secret santa list:

(index):131 Epoch => AmeliaRose
(index):131 AmeliaRose => Bicboi
(index):131 Bicboi => MiniKoala
(index):131 MiniKoala => BnK
(index):131 BnK => HoneyBadger
(index):131 HoneyBadger => AtomicBoogie
(index):131 AtomicBoogie => Pokeadot
(index):131 Pokeadot => Liltiddies
(index):131 Liltiddies => lightofsin
(index):131 lightofsin => Umbral
(index):131 Umbral => Tremendous
(index):131 Tremendous => Scorcia
(index):131 Scorcia => Jooju
(index):131 Jooju => Lam Broll
(index):131 Lam Broll => Roliviane
(index):131 Roliviane => Epoch

```

Where `x -> y` means `x` is `y's` santa. As an example, `Epoch` gives Amelia a gift, and Amelia gives `Bicboi` a gift etc.

