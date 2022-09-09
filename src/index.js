import './index.css';
import Items from './modules/display';

const refreshBtn = document.querySelector('.btn-ref');
const name = document.querySelector('.name');
const score = document.querySelector('.number');
const form = document.querySelector('#form');

const gameInfo = async (data) => {
  const resp = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RjH6JglhUiy5dVBUHC3M/scores
`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  const inf = await resp.json();
  return inf;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    user: name.value,
    score: score.value,
  };
  await gameInfo(data);
  form.reset();
});

refreshBtn.addEventListener('click', async () => {
  await Items.takeScore();
});
