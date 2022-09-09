import myId from './gameFun';

const link = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

class Items {
    static takeScore = async () => {
      const result = await fetch(`${link}/${myId}/scores`);
      const scores = await result.json();
      const resData = scores.result;
      this.render(resData);
    };

    static render(data) {
      const container = document.querySelector('.score-list');
      container.innerHTML = '';
      data.forEach((player) => {
        container.innerHTML += `
          <li>
            <p>${player.user}</p>
            <p>${player.score}</p>
          </li>`;
      });
    }
}
export default Items;
