
import myId from "./gameFun";


const link = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/scores'

class Items {

    static takeScore = async () => {
        const result = await fetch(`${link}/${myId}/scores`);
        const scores = await result.json();
        const resData = scores.result;
        resData.forEach((element) => {
            Items.render(element);
            
        });
    };


    static render(element) {
        const cont= document.querySelector('.score-list');
        const info = document.createElement('li');
        info.innerHTML = `
          <p>${element.user}</p>
          <p>${element.score}</p>
          `;
    
    cont.appendChild(info);
      }
    }
    export default Items;
