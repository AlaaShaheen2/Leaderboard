fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/scores', {
  method: 'POST',
  body: JSON.stringify({
    name: ' Highest Score',
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then((resp) => resp.json())
  .then((data) => data);

const myId = 'RjH6JglhUiy5dVBUHC3M';

export default myId;
