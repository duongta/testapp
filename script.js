### script.js

document.addEventListener('DOMContentLoaded', (event) => {

    const form = document.getElementById('scoreForm');

    const nameInput = document.getElementById('name');

    const scoreInput = document.getElementById('score');

    const leaderboard = document.getElementById('leaderboard');



    const loadScores = () => {

        const scores = JSON.parse(localStorage.getItem('scores')) || [];

        return scores.sort((a, b) => b.score - a.score);

    };



    const saveScores = (scores) => {

        localStorage.setItem('scores', JSON.stringify(scores));

    };



    const renderScores = () => {

        const scores = loadScores();

        leaderboard.innerHTML = '';



        scores.forEach(({ name, score }) => {

            const row = document.createElement('tr');

            const nameCell = document.createElement('td');

            const scoreCell = document.createElement('td');



            nameCell.textContent = name;

            scoreCell.textContent = score;



            row.appendChild(nameCell);

            row.appendChild(scoreCell);

            leaderboard.appendChild(row);

        });

    };



    form.addEventListener('submit', (e) => {

        e.preventDefault();



        const name = nameInput.value.trim();

        const score = parseInt(scoreInput.value.trim());



        if (name && !isNaN(score)) {

            const scores = loadScores();

            scores.push({ name, score });

            saveScores(scores);

            renderScores();



            nameInput.value = '';

            scoreInput.value = '';

        }

    });



    renderScores();

});
