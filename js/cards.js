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
const btnCreateDeckCui = document.getElementById('btn-create-deck-cui');


//AddEventListener
window.addEventListener('load',init,false);
window.addEventListener('resize',init,false);
btnCreateDeckCui.addEventListener('click',(e)=>{
    // console.log("Testing btnCreateDeckCui");
    cardOutputCUI();
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
function cardOutputCUI(){
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
    
}