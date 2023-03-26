import React from 'react'
import Table from './Table'

export default function Score(props) {

	const newGame=()=>{
		props.createGame()
		props.setSwitchPages(1)
	}

	return (
		<div className='conteiner '>
			<div className='score'>
				<h2 className='title '>The Score</h2>
				<Table playersData={props.playersData} />
				<button onClick={newGame} style={{height: "45px"}} className='Btn'>NEW GAME</button>
			</div>
		</div>
	)
}
