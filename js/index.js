$(function () {

  /**
   * A cell point on the hexagon grid
   */
  function Point (x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  /**
   * The abstract data structure for a hexagon
   */
  function Hexagon () {

  }

  /**
   * The abstract data structure for a hexagonal grid
   * The center of the grid is Point(0, 0)
   */
  function HexagonGrid () {
    this.grid = {};

    /**
     * Adds a hexagon to the data structure
     */
    this.addHexagon = function (hexagon, point) {
      // add row if doesn't exist
      var row = this.grid[point.y];
      if (!row) {
        this.grid[point.y] = {};
      }
      
      // add hexagon to row
      this.grid[point.y][point.x] = hexagon;
    };

    this.hasHexagon = function (point) {
      var row = this.grid[point.y];
      return row && row[point.x];
    };

    /**
     * Gets a list of all hexagons
     * @returns {Hexagon[]} An array of hexagons in the grid
     */
    this.getHexagons = function () {
      var hexagonList = [];
      for (var rowIndex in this.grid) {
        var row = this.grid[rowIndex];
        for (var columnIndex in row) {
          var column = this.grid[rowIndex][columnIndex];
          hexagonList.push(column);
        }
      }
      return hexagonList;
    };
  }

  var hexagonGrid = new HexagonGrid();
  hexagonGrid.addHexagon(new Hexagon(), new Point());
  console.log(hexagonGrid.getHexagons());
});