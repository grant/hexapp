$(function () {

  var Hexgrid = require('hexgrid');
  var Hexcell = require('hexcell');

  // Globals
  var grid;

  // Greates the grid
  function createGrid () {
    grid = new Hexgrid();

    grid.add(new Hexcell(new Point(0, 0)));
    grid.add(new Hexcell(new Point(1, 0)));
  }

  // Renders the grid
  function displayGrid () {
    var cells = grid.getHexcells();
    for (var i = 0; i < cells.length; ++i) {
      var cell = cells[i];
      var $cell = $('<div/>').addClass('cell');
      $cell.attr('top', cell.point.y);
      $cell.attr('left', cell.point.x);
      $('.hex-grid').append($cell);
    }
  }

  // Init
  createGrid();
  displayGrid();

});