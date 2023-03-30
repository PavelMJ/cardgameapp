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
				<h2 style={{fontSize: "35px",}} className='title'>The Score</h2>
				<div style={{fontSize: "25px", margin: "10px"}}>
				<Table playersData={props.playersData} />
				</div>
				<button onClick={newGame} style={{height: "45px"}} className='Btn'>NEW GAME</button>
			</div>
		</div>
	)
}
