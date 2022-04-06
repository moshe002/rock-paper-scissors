let rock1 = false;
let rock2 = false;
let paper1 = false;
let paper2 = false;
let scissor1 = false;
let scissor2 = false;

function clickRock1() {
    document.getElementById('rockpic1').style.display = 'block';
    rock1 = true;
    // console.log(rock1)
    // console.log('player 1 chose rock');
        document.getElementById('phrase1').innerHTML = 'Player 1 chose ROCK'
        document.getElementById('rock2').style.pointerEvents = 'auto';
        document.getElementById('rock2').style.opacity = '100%';
        document.getElementById('paper2').style.pointerEvents = 'auto';
        document.getElementById('paper2').style.opacity = '100%';
        document.getElementById('scissors2').style.pointerEvents = 'auto';
        document.getElementById('scissors2').style.opacity = '100%';
        document.getElementById('paper1').style.display = 'none';
        document.getElementById('scissors1').style.display = 'none';
}

function clickPaper1() {
    document.getElementById('paperpic1').style.display = 'block';
    paper1 = true;
    // console.log(paper1)
    // console.log('player 1 chose paper');
        document.getElementById('phrase1').innerHTML = 'Player 1 chose PAPER'
        document.getElementById('rock2').style.pointerEvents = 'auto';
        document.getElementById('rock2').style.opacity = '100%';
        document.getElementById('paper2').style.pointerEvents = 'auto';
        document.getElementById('paper2').style.opacity = '100%';
        document.getElementById('scissors2').style.pointerEvents = 'auto';
        document.getElementById('scissors2').style.opacity = '100%';
        document.getElementById('rock1').style.display = 'none';
        document.getElementById('scissors1').style.display = 'none';
}

function clickScissor1() {
    document.getElementById('scissorpic1').style.display = 'block';
    scissor1 = true;
    // console.log(scissor1)
    // console.log('player 1 chose scissors');
        document.getElementById('phrase1').innerHTML = 'Player 1 chose SCISSOR'
        document.getElementById('rock2').style.pointerEvents = 'auto';
        document.getElementById('rock2').style.opacity = '100%';
        document.getElementById('paper2').style.pointerEvents = 'auto';
        document.getElementById('paper2').style.opacity = '100%';
        document.getElementById('scissors2').style.pointerEvents = 'auto';
        document.getElementById('scissors2').style.opacity = '100%';
        document.getElementById('paper1').style.display = 'none';
        document.getElementById('rock1').style.display = 'none';
}

function clickRock2() {
    document.getElementById('rockpic2').style.display = 'block';
    rock2 = true;
    // console.log(rock2)
    // console.log('player 2 chose rock');
        document.getElementById('phrase2').innerHTML = 'Player 2 chose ROCK'
        document.getElementById('results-btn').style.display = 'block'
        //document.getElementById('reset-btn').style.display = 'block'
        document.getElementById('paper2').style.display = 'none';
        document.getElementById('scissors2').style.display = 'none';
}

function clickPaper2() {
    document.getElementById('paperpic2').style.display = 'block';
    paper2 = true;
    // console.log(paper2)
    // console.log('player 2 chose paper');
        document.getElementById('phrase2').innerHTML = 'Player 2 chose PAPER'
        document.getElementById('results-btn').style.display = 'block'
        //document.getElementById('reset-btn').style.display = 'block'
        document.getElementById('rock2').style.display = 'none';
        document.getElementById('scissors2').style.display = 'none';
}

function clickScissor2() {
    document.getElementById('scissorpic2').style.display = 'block';
    scissor2 = true;
    // console.log(scissor2)
    // console.log('player 2 chose scissors');
        document.getElementById('phrase2').innerHTML = 'Player 2 chose SCISSOR'
        document.getElementById('results-btn').style.display = 'block'
        //document.getElementById('reset-btn').style.display = 'block'
        document.getElementById('paper2').style.display = 'none';
        document.getElementById('rock2').style.display = 'none';
}

function getResult() {
    if(rock1 === true && paper2 === true){
        document.getElementById('result').innerHTML = 'Player 2 wins!';
    }
    else if(rock1 === true && scissor2 === true) {
        document.getElementById('result').innerHTML = 'Player 1 wins!';
    }
    else if(rock1 === true && rock1 === true) {
        document.getElementById('result').innerHTML = "It's a tie!";
    }
    else if(paper1 === true && rock2 === true){
        document.getElementById('result').innerHTML = 'Player 1 wins!';
    }
    else if(paper1 === true && scissor2 === true){
        document.getElementById('result').innerHTML = 'Player 2 wins!';
    }
    else if(paper1 === true && paper2 === true){
        document.getElementById('result').innerHTML = "It's a tie!";
    }
    else if(scissor1 === true && rock2 === true){
        document.getElementById('result').innerHTML = 'Player 2 wins!';
    }
    else if(scissor1 === true && paper2 === true){
        document.getElementById('result').innerHTML = 'Player 1 wins!';
    }
    else if(scissor1 === true && scissor1 === true){
        document.getElementById('result').innerHTML = "It's a tie!";
    }

    document.getElementById('reset-btn').style.display = 'block'
    document.getElementById('results-btn').style.display = 'none'
}

function reset() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('rockpic1').style.display = 'none';
    document.getElementById('rockpic2').style.display = 'none';
    document.getElementById('paperpic1').style.display = 'none';
    document.getElementById('paperpic2').style.display = 'none';
    document.getElementById('scissorpic1').style.display = 'none';
    document.getElementById('scissorpic2').style.display = 'none';
    document.getElementById('phrase1').innerHTML = ''
    document.getElementById('phrase2').innerHTML = ''
    document.getElementById('results-btn').style.display = 'none'
    document.getElementById('reset-btn').style.display = 'none'

    document.getElementById('rock2').style.pointerEvents = 'none';
    document.getElementById('rock2').style.opacity = '50%';
    document.getElementById('paper2').style.pointerEvents = 'none';
    document.getElementById('paper2').style.opacity = '50%';
    document.getElementById('scissors2').style.pointerEvents = 'none';
    document.getElementById('scissors2').style.opacity = '50%';

    document.getElementById('paper1').style.display = 'block';
    document.getElementById('scissors1').style.display = 'block';
    document.getElementById('rock1').style.display = 'block';

    document.getElementById('paper2').style.display = 'block';
    document.getElementById('rock2').style.display = 'block';
    document.getElementById('scissors2').style.display = 'block';
}