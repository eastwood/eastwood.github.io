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
        }
    };

    render();
});
