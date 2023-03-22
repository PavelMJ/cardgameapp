import React, { useState } from 'react'
import Card from './Card'


export default function GamePage(props) {

	const [index, setIndex] = useState(0)
	const [comPoint, setcomPoint] = useState(0)
	const [playerPoint, setPlayerPoint] = useState(0)

	const progres = () => {

		console.log(props.compDeck[index].value);
		console.log(props.playerDeck[index].value);

		if (props.compDeck[index].value > props.playerDeck[index].value) {
			setcomPoint(comPoint+1)

		}
		else if (props.compDeck[index].value < props.playerDeck[index].value) {
			setPlayerPoint(playerPoint+1)
		}
		else {
			setPlayerPoint(playerPoint+1)
			setcomPoint(comPoint+1)
		}




		if(index ===25){
			props.setSwitchPages(2)
		}

		setIndex(index+1)


	}

	// const sendCardToComp = () => {
	// 	return props.compDeck[index]
	// }

	// const sendCardToPlayer = () => {
	// 	return props.playerDeck[index]
	// }

	return (
		<div className='Game'>
			<h1 className='title' >COMPUTER</h1>
			<div className='compPoints title'>points {comPoint}</div>

			<Card chosenCard={props.compDeck[index]} />
			<Card chosenCard={props.playerDeck[index]} />
			<div className='playerPoints title'>points {playerPoint}</div>
			<h1 className='title'>{props.player.playerName}</h1>
			<button onClick={progres} className='next Btn'>NEXT</button>

		</div>
	)
}
