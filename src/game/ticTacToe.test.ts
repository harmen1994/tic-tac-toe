import { describe, test, expect } from 'vitest';
import { initialiseBoard, makeMove, checkWin, resetBoard } from './ticTacToe';

describe('Tic Tac Toe functions', () => {
    test('should initialise an empty board', () => {
        const board = initialiseBoard();
        expect(board).toEqual([
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]);
    });

    test('makeMove should place a player mark on the board', () => {
        // Test making a random move
    });

    test('checkWin should correctly identify a winner', () => {
        // Test win conditions
    });

    test('isBoardFull should correctly determine if the board is full', () => {
        // Test board fullness
    });

    test('resetBoard should reset the board to its initial state', () => {
        // Test resetting the board
    });
});