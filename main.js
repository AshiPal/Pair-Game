document.addEventListener('DOMContentLoaded', () =>{

    //card options 
    const cardArray = [
        {
            name:'agnes',
            img:'images/agnes.jpg'
        },
        {
            name:'jerry',
            img:'images/jerry.jpg'
        },
        {
            name:'mickey_mouse',
            img:'images/mickey_mouse.png'
        },
        {
            name:'minions',
            img:'images/minions.png'
        },
        {
            name:'mr_bean',
            img:'images/mr_bean.png'
        },
        {
            name:'noddy',
            img:'images/noddy.jpg'
        },
        {
            name:'agnes',
            img:'images/agnes.jpg'
        },
        {
            name:'jerry',
            img:'images/jerry.jpg'
        },
        {
            name:'mickey_mouse',
            img:'images/mickey_mouse.png'
        },
        {
            name:'minions',
            img:'images/minions.png'
        },
        {
            name:'mr_bean',
            img:'images/mr_bean.png'
        },
        {
            name:'noddy',
            img:'images/noddy.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    var grid = document.querySelector('.grid');
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];
    var result = document.querySelector('.result');

    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            card = document.createElement('img');
            card.setAttribute('src','images/banner.jpg');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);

        }
        
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if(cardChosenId.length == 2){
            setTimeout(checkForMatch,500);
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOne = cardChosenId[0];
        const optionTwo = cardChosenId[1];
        if(cardChosen[0] === cardChosen[1]){
            cards[optionOne].classList.add('hide');
            cards[optionTwo].classList.add('hide');
            cardsWon.push(cardChosenId);
            
        }
        else{
            cards[optionOne].setAttribute('src', 'images/banner.jpg');
            cards[optionTwo].setAttribute('src', 'images/banner.jpg');
        }

        cardChosen = [];
        cardChosenId = [];
        result.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            result.textContent = "Congratulations!! You Won";
            // grid.classList.add('hide-grid');
            // grid.classList.add('visible-grid')
            // grid.textContent = "Congratulations!! You Won";
        }
    }

    createBoard();

})