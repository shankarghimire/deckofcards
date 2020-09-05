//Testing javascript
//console.log("Testing!!!");

//global variable
var suits = ["spades","hearts","clubs","diams"];
var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var deckOfCards = [];
var aCard;


//create DOM objects
const wrapper = document.getElementById('wrapper');
const output = document.getElementById('output');
const btnCreateDeckCUI = document.getElementById('btn-create-deck-cui');
const btnCreateDeckGUI = document.getElementById('btn-create-deck-gui');
const btnRandomCard = document.getElementById('btn-random-card');
const btnShuffleDeck = document.getElementById('btn-shuffle-deck');

//AddEventListener for load and resize events
window.addEventListener('load',init,false);
window.addEventListener('resize',init,false);

//AddEventListener for the btnCreateDeckCUI
btnCreateDeckCUI.addEventListener('click',(e)=>{
    // console.log("Testing btnCreateDeckCui");
    cardOutputCUI();
},false);

btnCreateDeckGUI.addEventListener('click',(e)=>{},false);
btnRandomCard.addEventListener('click',(e)=>{
    output.innerHTML = randomCardOutputGUI();
},false);
btnShuffleDeck.addEventListener('click',(e)=>{
    //function call to shuffle deck
    shuffleDeck();
},false);

function init(){
    //console.log("Testing init-function!!!");
    //function call to create deck of cards
    createDeckOfCards();
}
function createDeckOfCards(){
    let s,n;
    let suit;
    let color;
    let cardNum;
    let cardValue;
    let totalCards = 0;
    let aCard;
    for(s in suits){
        suit = suits[s];
        if(suit === "spades" || suit === "clubs"){
            color = "#000000";
        }else{
            color = "#FF0000";
        }
        //console.log(suit);
        for(n in numbers){
            cardNum = numbers[n];
            //console.log(cardNum);
            if(n <=9){
                cardValue = parseInt(n) + 1;
            }
            else{
                cardValue = 10;
            }
            //Design a Card Object
            aCard ={
                suit: suit,
                cardNum: cardNum,
                cardValue: cardValue,
                color: color,
            }
            deckOfCards.push(aCard);
            //output.innerHTML += '<span style="color:'+ color   +'">' +  numbers[n] + "&" + suits[s] + ";" + " " + '</span>';
            //console.log(aCard);
            //console.log(cardValue);
            //totalCards++;
        }
    }
    console.log(deckOfCards);
    
}

function shuffleDeck(){
    let i,j,temp;
    for(i = (deckOfCards.length -1); i>=0; i--){
        j = Math.floor(Math.random() * (i+1));
        temp = deckOfCards[i];
        deckOfCards[i] = deckOfCards[j];
        deckOfCards[j] = temp;
    }
}
function cardOutputCUI(){
    output.innerHTML = "";
    let i;
    let c = 0;
    for(i = 0; i < deckOfCards.length; i++){
        output.innerHTML += '<span style="color:'+ deckOfCards[i].color   +'">' +  deckOfCards[i].cardNum + "&" + deckOfCards[i].suit + ";" + " " + '</span>';
        c++;
        if(c == 13){
            output.innerHTML += "<br>";
            c = 0;
        } 
    } 
    output.innerHTML += "<br>Total Cards: " + deckOfCards.length;
}

function randomCardOutputGUI(){
    let n = Math.floor((Math.random() * 51) +1);
    let suitName = deckOfCards[n].suit;
    let outputCard = '<div class="icard ' +  suitName +'"><div class="top-card '+  suitName +'">' + deckOfCards[n].cardNum    +'<br>&' + suitName +';</div><div class="content-card  ' +  suitName +'">&' + suitName +';</div><div class="bottom-card '+  suitName +'">' + deckOfCards[n].cardNum  +'<br>&' + suitName + ';</div></div>';
    return outputCard;
}