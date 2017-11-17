import board from './board';
import deepFreeze from 'deep-freeze';

describe('board reducer', () => {
	const emptyBoard = [[null,null,null],[null,null,null],[null,null,null]];
	it('should change the mark in a cell', () => {
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

	it("should reset the board", ()=>{
		const filledBoard = [['x','0','x'],['x','0','0'],['0','x','x']];
		deepFreeze(filledBoard);
		expect(
			board(
				filledBoard,
				{
					type: 'RESET',
					size: 3
				}
			)
		).toEqual(emptyBoard);
	});

	it("should change board's dimension", ()=>{
		const newBoard = [[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]];
		deepFreeze(newBoard);
		expect(
			board(
				emptyBoard,
				{
					type: 'CHANGE_SIZE',
					size: 4
				}
			)
		).toEqual(newBoard);
	});
})	