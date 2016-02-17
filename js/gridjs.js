var boxSize = $('.wrapper').width();
var defaultSquares = 50;

$(document).ready(function () {
    createGrid(defaultSquares);
    highlighter();

    $('#reset_button').on('click', function(){
        reseter();
    });
    $('#fader_button').on('click', function() {
        fader();
    });
    $('#newGrid').on('click', function() {
        grid();
    });
    $('#default').on('click', function(){
        reseter();
        createGrid(defaultSquares)
    });
    $('#colorChoice').on('click', function(){
        changeColor();
    });
    $("#random").click(function() {
        randomOption();
    });
});

function createGrid(userBoxes) {
    var squareSize = (boxSize / userBoxes);
    
    for(var i = 0; i < (userBoxes * userBoxes); i++) {
        $('.wrapper').append('<div class="square"></div>');
    }
    $(".square").width(squareSize);
    $(".square").height(squareSize);
    highlighter();
};


function grid() {
    //prompt user for grid squares
    var userGrid = prompt("How many rows and columns would you like your grid to have?")
    if (userGrid <= 120) {
        createGrid(userGrid);
    } else if (userGrid > 120) {
        alert("Sorry. That's too many squares. Click again to create a new grid.")
    } else {
        alert("Not sure what that is.. Try click again to create a new grid.")
    }
};


function fader(){
    reseter();
    $('.square').unbind();
    $(".square").mouseenter(function() {
        $(this).fadeTo(600, 0);
    });
    $(".square").mouseleave(function() {
        $(this).fadeTo(600, 1);
    });
    
};

function randomOption() {
    reseter();
    $(".square").mouseover(function() {
        $(this).css("background-color", getRandomColor());
    });
}

function getRandomColor() {
    return (Math.random().toString(16) + '000000').slice(2, 8);
}

function changeColor(){
    $('.square').unbind();
    var userColor = prompt("What colour would you like?")
    $(".square").mouseenter(function() {
        $(this).css({'background': userColor})
    });
    $(".square").mouseleave(function() {
        $(this).css({'background': 'black'})
    });
};


function highlighter(){
    $('.square').unbind();
    $(".square").mouseenter(function() {
        $(this).css({'background': '#FFFFFF'})
    });
    $(".square").mouseleave(function() {
        $(this).css({'background': 'black'})
    });
};

function reseter() {
    // reset all elements to black and opaque
    $(".square").css("background-color", "black");
    $(".square").css("opacity", 1);
    highlighter();
}