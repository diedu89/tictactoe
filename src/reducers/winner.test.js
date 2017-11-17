import winner from './winner';

describe('board reducer', () => {
	it('should not check for winner when sufficient moves haven\'t been made', () => {
		expect(
			winner(
				null, 
				{
					type: 'CHECK_WINNER',
					turn: 2, //number of movements for player
					size: 3,
					board: [],
					lastMove: { col: 1, row: 1}
				}
			)
		).toBe(null);
	})

	const winnerBoards = [
		{board: [['0','0','0'],[null,null,null],[null,null,null]], lastMove:{row: 0, col: 0}, winType: 'row'},
		{board: [[null,null,null],['0','0','0'],[null,null,null]], lastMove:{row: 1, col: 0}, winType: 'row'},
		{board: [[null,null,null],[null,null,null],['0','0','0']], lastMove:{row: 2, col: 0}, winType: 'row'},
		{board: [['0',null,null],['0',null,null],['0',null,null]], lastMove:{row: 0, col: 0}, winType: 'col'},
		{board: [[null,'0',null],[null,'0',null],[null,'0',null]], lastMove:{row: 0, col: 1}, winType: 'col'},
		{board: [[null,null,'0'],[null,null,'0'],[null,null,'0']], lastMove:{row: 0, col: 2}, winType: 'col'},
		{board: [['0',null,null],[null,'0',null],[null,null,'0']], lastMove:{row: 1, col: 1}, winType: 'down_diagonal'},
		{board: [[null,null,'0'],[null,'0',null],['0',null,null]], lastMove:{row: 1, col: 1}, winType: 'up_diagonal'}
	]

	function runWinner(data, i){
		it("should declare a winner with winner board " + i, () => {
			expect(
				winner(
						null,
						{
							type: "CHECK_WINNER",
							turn: 3,
							size: 3,
							board: data.board,
							lastMove: data.lastMove
						}
				)
			).toEqual({player: '0', winType: data.winType, lastMove: data.lastMove});
		})
	}

	for (var i = 0; i < winnerBoards.length; i++) {
		runWinner(winnerBoards[i], i);
	}

	const noWinnerBoards = [
		{board: [['0','0',null],[null,null,'0'],[null,null,null]], lastMove:{row: 0, col: 0}},
		{board: [[null,null,null],['0','0',null],[null,null,'0']], lastMove:{row: 1, col: 0}},
		{board: [[null,null,null],[null,null,'0'],['0','0',null]], lastMove:{row: 2, col: 0}},
		{board: [['0',null,null],['0',null,null],[null,'0',null]], lastMove:{row: 0, col: 0}},
		{board: [[null,'0',null],[null,null,'0'],[null,'0',null]], lastMove:{row: 0, col: 1}},
		{board: [[null,null,'0'],[null,'0',null],[null,null,'0']], lastMove:{row: 0, col: 2}},
		{board: [[null,'0',null],[null,'0',null],[null,null,'0']], lastMove:{row: 1, col: 1}},
		{board: [[null,null,'0'],[null,'0',null],[null,'0',null]], lastMove:{row: 1, col: 1}}
	]

	function runNoWinner(data, i){
		it("should not declare a winner with no winner board " + i, () => {
			expect(
				winner(
						null,
						{
							type: "CHECK_WINNER",
							turn: 3,
							size: 3,
							board: data.board,
							lastMove: data.lastMove
						}
				)
			).toBe(null);
		})
	}

	for (var i = 0; i < winnerBoards.length; i++) {
		runNoWinner(noWinnerBoards[i], i);
	}

	it("should declare a draw", () => {
		expect(
			winner(
					null,
					{
						type: "CHECK_WINNER",
						turn: 5,
						size: 3,
						board: [['x','0','x'],['x','0','0'],['0','x','x']],
						lastMove: {row: 1, col: 2}
					}
			)
		).toEqual({player: 'none', winType: 'none'});
	});

})	