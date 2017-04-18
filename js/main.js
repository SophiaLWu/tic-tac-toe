
$(document).ready(function() {
  board.init();
  game.takeTurn();
});


// Objects

var board = {
  board: [],
  init: function() {
    this.createBoard();
    this.renderBoard();
  },
  createBoard: function() {
    for (var i = 0; i < 3; i++) {
      this.board.push([" ", " ", " "]);
    }
  },
  renderBoard: function() {
    $(".board-container").append("<table class='board'></table>");
    for (var i = 0; i < this.board.length; i++) {
      $(".board").append("<tr class='board-row-" + i + "'></tr>");
      for (var j = 0; j < this.board.length; j++) {
        $(".board-row-" + i).append("<td class='board-space' data-row='" + i + 
                                     "' data-col='" + j + "'>" + 
                                     this.board[i][j] + "</td>")
      }
    }
  },
  addSymbol: function(space, symbol) {
    this.board[space.data("row")][space.data("col")] = symbol;
    space.text(symbol);
  },
}

var game = {
  currentPlayer: "X",
  takeTurn: function() {
    $(".board-space").on("click", function() {
      board.addSymbol($(this), game.currentPlayer);
      game.currentPlayer = game.currentPlayer == "X" ? "O" : "X";
    });
  },
}
