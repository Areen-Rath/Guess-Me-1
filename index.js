let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "chess"
    },
    {
        "inputs": 6,
        "category": "European Country",
        "word": "france"
    }
]


var word;

$(document).ready(function() {
    this.getWord();
});

function getWord() {
    num = parseInt(Math.random() * words.length);
    word = words[num];
    let blank = "_";
    $("#hint").html(word);
    $("#blanks").html(blank.repeat(word.inputs));
}

$(function() {
    fillBlanks();
});

function fillBlanks() {
    var gameOver = false;
    $(".clickable").click(function() {
        var correctGuess = false;
        let id = $(this).attr("id");
        var life = parseInt($("life").text());
        for (var i = 0; i < word.word.length; i++) {
            if (word.word.charAt(i).toLowerCase() === id) {
                if (life > 0 && ($(".fill_blanks").eq(i).html() === "_" || $(".fill_blanks").eq(i).html() === id)) {
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;
                    if ($("#blanks").text() === word.word.toLowerCase()) {
                        $("#result").text("You Win!");
                        correctGuess = true;
                        gameOver = true;
                    }
                }
            }
        }
    });
}