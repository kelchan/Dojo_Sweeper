var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];

var dojoDiv = document.querySelector("#the-dojo");
let numOf0 = 0; //41

//GENERATE RANDOM MAP
for(let x = 0; x < theDojo.length; x++) {
    for(let y = 0; y < theDojo[x].length; y++) {
        theDojo[x][y] = Math.floor(Math.random() * 3);
    }
}


// Creates the rows of buttons for this game
function render(theDojo) {
    //ALERT RULES
    alert('Rules: each box contains a number from 0-2, Clicking on a box will return the sum of all neighboring boxes, Try to all 0s(mines) without touching any number greater than 0, ENJOY!');
    
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    // TO FIND NUMBER OF 0s
    for(let x = 0; x < theDojo.length; x++) {
        console.log('test')
        for(let y = 0; y < theDojo[x].length; y++) {
            if(theDojo[x][y] == 0) {
                numOf0++;
            }
        }
    }
    document.querySelector('#numOf0').innerText = numOf0;
    console.log('number of 0s generated = ', numOf0);
    return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
// find neighbors
// verify if neighbors are within bounds
// if neighbors are inbound add to sum
// alert("TODO - determine how many ninjas are hiding in adjacent squares");
function howMany(i, j, element) {
    console.log({i, j}, 'working...');
    console.log( theDojo[i-1, j-1], theDojo[i-1, j] );

    numOf0--;
    console.log('NUMBER OF 0S = ', numOf0);
    if(numOf0 == 0) {
        alert('WINNER! Well that was a waste of time...');
    }



    if(theDojo[i][j] != 0) {
        dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    }

    let sum = 0;
    let neighbors = [
        [i-1, j-1], [i-1, j], [i-1, j+1],
        [i, j-1], [i, j+1],
        [i+1, j-1], [i+1, j], [i+1, j+1]
    ];
    console.log('neighbors =', neighbors);

    for(const neighbor of neighbors) {
        let x = neighbor[1];
        let y = neighbor[0];
        if(verify(x, y)) {
            sum += theDojo[y][x];
        }
    }
    console.log('sum =', sum);
    //Draw the number onto the button 
    element.innerText = sum;

}

function verify(x, y) {    
    return x >= 0 && x <= 9 && y >= 0 && y <=9;
}
    

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

