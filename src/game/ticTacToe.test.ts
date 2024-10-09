import { describe, test, expect } from 'vitest';
import { initializeBoard } from './ticTacToe';

describe('Tic Tac Toe functions', () => {
    test('should initialize an empty board', () => {
        const board = initializeBoard();
        expect(board).toEqual([
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]);
    });
});