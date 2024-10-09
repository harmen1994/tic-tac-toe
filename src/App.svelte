<script lang="ts">
  import { TicTacToe } from './game/ticTacToe';

  // Initial simple board with one X and one O for display
  const initialBoard = [
    ['X', null, null],
    [null, 'O', null],
    [null, null, null]
  ];

  let board = initialBoard;

  function handleClick(row: number, col: number) {
    if (!board[row][col]) {
      board[row][col] = board[row][col] === 'X' ? 'O' : 'X';
    }
  }
</script>

<main>
  <h1>Tic-Tac-Toe</h1>

  <div class="ticTacToe">
    {#each board as row, rowIndex}
      <div class="row">
        {#each row as cell, colIndex}
          <button class="cell" on:click={() => handleClick(rowIndex, colIndex)}>
            {cell || ''}
          </button>
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
  }

  .ticTacToe {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    gap: 1em;
    /*margin-top: 1em;*/
  }

  .row {
    display: contents;
  }

  .cell {
    width: 50px;
    height: 50px;
    background-color: #f0f0f0;
    border: 1px solid #333;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .cell:hover {
    background-color: #e0e0e0;
  }
</style>