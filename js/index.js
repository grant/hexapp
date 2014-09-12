$(function () {

  /**
   * The abstract data structure for a hexagon
   */
  function Hexagon () {

  }

  /**
   * The abstract data structure for a hexagonal grid
   */
  function HexagonGrid () {
    this.grid = [[]];

    /**
     * Adds a hexagon to the data structure
     */
    this.addHexagon = function (hexagon, position) {
      console.log('good');
    };

    /**
     * Gets a list of all hexagons
     * @returns {Hexagon[]} An array of hexagons in the grid
     */
    this.getHexagons = function () {
      var hexagonList = [];
      for (var i = 0; i < this.grid.length; ++i) {
        var row = this.grid[i];
        for (var j = 0; j < row.length; ++j) {
          hexagonList.push(row[j]);
        }
      }
      return hexagonList;
    };
  }

  var hexagonGrid = new HexagonGrid();
  hexagonGrid.addHexagon(new Hexagon(), {
    x: 0,
    y: 0
  });
});