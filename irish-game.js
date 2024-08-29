document.addEventListener("DOMContentLoaded", () => {
    const things = [
        "/assets/game/ireland.jpg",
        "/assets/game/beer.jpg",
        "/assets/game/jim.jpg",
        "/assets/game/fiddle.jpg",
        "/assets/game/potato.jpg",
        "/assets/game/pub.jpg",
        "/assets/game/whiskey.jpg",
        "/assets/game/dance.jpg",
        "/assets/game/hurling.jpg"
    ];

    let winner = things[0];
    let roundNumber = 1;

    const gameContainer = document.getElementById("game");
    const h2 = document.querySelector("h2");
    const body = document.querySelector("body");

    function createPotatoShower() {
        for (let i = 0; i < 50; i++) { // Number of potatoes
            const potato = document.createElement('img');
            potato.className = 'potato';
            potato.src = '/assets/game/winner-2.png';
            potato.alt = 'Potato';
            potato.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            potato.style.animationDelay = `${Math.random() * 5}s`; // Random start time
            potato.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration

            body.prepend(potato);
        }
    }

    function render() {
        if (roundNumber < things.length) {
            gameContainer.innerHTML = `
                <img
                    class="thing border p-1"
                    src="${winner}"
                    alt="A"
                    onclick="onClickHandler('${winner}')"
                />
                <img
                    class="thing border p-1"
                    src="${things[roundNumber]}"
                    alt="B"
                    onclick="onClickHandler('${things[roundNumber]}')"
                />
            `;
        } else {
            gameContainer.innerHTML = `
              <img class="winner" src="${winner}" />
            `;
        }
    }

    window.onClickHandler = function(thing) {
        winner = thing;
        roundNumber += 1;
        const isFinished = roundNumber >= things.length;
        render(isFinished);
        if (isFinished) {
          h2.innerHTML = "And the winner is..."
          createPotatoShower();
        }
    };

    render();
});
