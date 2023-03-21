import React, { useState } from 'react'
import Card from './Card'


export default function GamePage(props) {

	const [index, setIndex] = useState(0)
	const [comPoint, setcomPoint] = useState(0)
	const [playerPoint, setPlayerPoint] = useState(0)

	const progres = () => {
		if (props.compDeck[index] > props.playerDeck[index]) {
			setcomPoint(comPoint+1)

		}
		else if (props.compDeck[index] < props.playerDeck[index]) {
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

	const sendCardToComp = () => {
		return props.compDeck[index]
	}

	const sendCardToPlayer = () => {
		return props.playerDeck[index]
	}

	return (
		<div className='Game'>
			<h1 className='title' >COMPUTER</h1>
			<Card chosenCard={sendCardToComp} />
			<Card chosenCard={sendCardToPlayer} />
			<h1 className='title'>{props.player.playerName}</h1>
			<button onClick={progres} className='next Btn'>NEXT</button>

		</div>
	)
}
