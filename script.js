let rock1 = false;
let rock2 = false;
let paper1 = false;
let paper2 = false;
let scissor1 = false;
let scissor2 = false;

function clickRock1() {
    document.getElementById('rockpic1').style.display = 'block';
    rock1 = true;
    console.log(rock1)
    console.log('player 1 chose rock');
        document.getElementById('phrase1').innerHTML = 'Player 1 chose rock'
}

function clickPaper1() {
    document.getElementById('paperpic1').style.display = 'block';
    paper1 = true;
    console.log(paper1)
    console.log('player 1 chose paper');
        document.getElementById('phrase1').innerHTML = 'Player 1 chose paper'
}

function clickScissor1() {
    document.getElementById('scissorpic1').style.display = 'block';
    scissor1 = true;
    console.log(scissor1)
    console.log('player 1 chose scissors');
        document.getElementById('phrase1').innerHTML = 'Player 1 chose scissor'
}

function clickRock2() {
    document.getElementById('rockpic2').style.display = 'block';
    rock2 = true;
    console.log(rock2)
    console.log('player 2 chose rock');
        document.getElementById('phrase2').innerHTML = 'Player 2 chose rock'
}

function clickPaper2() {
    document.getElementById('paperpic2').style.display = 'block';
    paper2 = true;
    console.log(paper2)
    console.log('player 2 chose paper');
        document.getElementById('phrase2').innerHTML = 'Player 2 chose paper'
}

function clickScissor2() {
    document.getElementById('scissorpic2').style.display = 'block';
    scissor2 = true;
    console.log(scissor2)
    console.log('player 2 chose scissors');
        document.getElementById('phrase2').innerHTML = 'Player 2 chose scissor'
}

function getResult() {
    if(rock1 === true && paper2 === true){
        document.getElementById('result').innerHTML = 'Player 2 wins';
    }
    else if(rock1 === true && scissor2 === true) {
        document.getElementById('result').innerHTML = 'Player 1 wins';
    }
    else if(rock1 === true && rock1 === true) {
        document.getElementById('result').innerHTML = 'A tie';
    }
    else if(paper1 === true && rock2 === true){
        document.getElementById('result').innerHTML = 'Player 1 wins';
    }
    else if(paper1 === true && scissor2 === true){
        document.getElementById('result').innerHTML = 'Player 2 wins';
    }
    else if(paper1 === true && paper2 === true){
        document.getElementById('result').innerHTML = 'A tie';
    }
    else if(scissor1 === true && rock2 === true){
        document.getElementById('result').innerHTML = 'Player 2 wins';
    }
    else if(scissor1 === true && paper2 === true){
        document.getElementById('result').innerHTML = 'Player 1 wins';
    }
    else if(scissor1 === true && scissor1 === true){
        document.getElementById('result').innerHTML = 'A tie';
    }
}