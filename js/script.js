// Space Invaders   -------------------------------------------------------------------------------------------------------------------------------------------------------------
const game = document.querySelector('#game');
const gameZone = document.querySelector('#gameZone')


// Création du joueur 1 -------------------------------------------------------------------------------------------------------------------------------------------------------------
let player1 = document.createElement('img');
console.log(gameZone)
gameZone.appendChild(player1);
player1.setAttribute('id', 'pOne');
player1.setAttribute('alt', 'vaisseau du joueur 1');
player1.src = "img/playerOne.png";


//------Déplacement du joueur 1 -----------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('keydown', ({key}) => {
    switch(key){
        case 'd':
            console.log('right');
            break;
        case 'q':
            console.log('left');
            break;
        case 'z':
            console.log('shott')
    }

})


// Création du joueur 2 -------------------------------------------------------------------------------------------------------------------------------------------------------------
/*let player2 = document.createElement('img');
document.gameZone.appendChild('img');
player2.setAttribute('id', 'pTwo');
player2.setAttribute('alt', 'vaisseau du joueur 1');
player2.src= "img/playerTwo.png";*/

