document.addEventListener("DOMContentLoaded", () => {
    const things = [
        "/assets/game/ireland.jpg",
        "/assets/game/beer.jpg",
        "/assets/game/brosnan.jpg",
        "/assets/game/jim.jpg",
        "/assets/game/fiddle.jpg",
        "/assets/game/potato.jpg",
        "/assets/game/graham.jpg",
        "/assets/game/pub.jpg",
        "/assets/game/brendan.jpg",
        "/assets/game/whiskey.jpg",
        "/assets/game/dance.jpg",
        "/assets/game/hurling.jpg",
        "/assets/game/enya.jpg"
    ];

    let winner = things[0];
    let roundNumber = 1;

    const gameContainer = document.getElementById("game");
    const h2 = document.querySelector("h2");
    const body = document.querySelector("body");

    function isAudio(thing) {
        return thing.endsWith(".mp3");
    }

    function createElement(thing) {
        let element;
        if (isAudio(thing)) {
            const container = document.createElement('div');
            container.className = 'audio-container';
            element = document.createElement('audio');
            element.src = thing;
            element.controls = true; // Add controls for audio
            element.className = 'thing'; // Add styling class
            container.appendChild(element);
            container.onclick = () => onClickHandler(thing);
        } else {
            element = document.createElement('img');
            element.src = thing;
            element.className = 'thing'; // Add styling class
            element.onclick = () => onClickHandler(thing);
        }
        return element;
    }

    function createPotatoShower() {
        for (let i = 0; i < 50; i++) { // Number of potatoes
            const potato = document.createElement('img');
            potato.className = 'potato';
            potato.src = '/assets/game/winner-2.png';
            potato.alt = 'Potato';
            potato.style.position = 'absolute';
            potato.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            potato.style.top = `-${Math.random() * 100}px`; // Start position above the viewport
            potato.style.animationDelay = `${Math.random() * 5}s`; // Random start time
            potato.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration

            body.appendChild(potato);
        }
    }

    function render(isFinished) {
        gameContainer.innerHTML = '';
        if (!isFinished) {
            const elementA = createElement(winner);
            const elementB = createElement(things[roundNumber]);

            gameContainer.appendChild(elementA);
            gameContainer.appendChild(elementB);
        } else {
            const winnerImage = document.createElement('img');
            winnerImage.className = 'winner';
            winnerImage.src = winner;
            gameContainer.appendChild(winnerImage);
        }
    }

    window.onClickHandler = function(thing) {
        winner = thing;
        roundNumber += 1;
        const isFinished = roundNumber >= things.length;
        render(isFinished);
        if (isFinished) {
            h2.innerHTML = "And the winner is...";
            createPotatoShower();
        }
    };

    render(false);
});
