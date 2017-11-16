import board from './board';
import deepFreeze from 'deep-freeze';

describe('board reducer', () => {
	it('should change the mark in a cell', () => {
		const emptyBoard = [[null,null,null],[null,null,null],[null,null,null]];
		deepFreeze(emptyBoard);
		expect(
			board(
				emptyBoard,
				{
					type: 'MARK', row: 1, col: 1, player: '0'
				}
			)
		).toEqual([[null,null,null],[null,'0',null],[null,null,null]]);
	});

	it('should not allow a occupied cell', () => {
		const occupiedBoard = [[null,null,null],[null,'0',null],[null,null,null]];
		deepFreeze(occupiedBoard);
		expect(
			board(
				occupiedBoard,
				{
					type: 'MARK', row: 1, col: 1, player: 'x'
				}
			)
		).toEqual([[null,null,null],[null,'0',null],[null,null,null]]);
	});
})	