function configPathFinding(){
  easystar.setGrid(board);
  easystar.setIterationsPerCalculation(1000);
  easystar.setAcceptableTiles([1]);
  //easystar.enableCornerCutting();
  easystar.enableDiagonals();
}