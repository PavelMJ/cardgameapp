import React, { useState } from 'react'
import Card from './Card'


export default function GamePage(props) {

	const [index, setIndex] = useState(0)
	const [comPoint, setcomPoint] = useState(0)
	const [playerPoint, setPlayerPoint] = useState(0)

	const progres = () => {

		if (props.compDeck[index].value > props.playerDeck[index].value) {
			setcomPoint(comPoint + 1)

		}
		else if (props.compDeck[index].value < props.playerDeck[index].value) {
			setPlayerPoint(playerPoint + 1)
		}
		else {
			setPlayerPoint(playerPoint + 1)
			setcomPoint(comPoint + 1)
		}

		if (index === 25) {
			props.setSwitchPages(2)
			props.setAllPlayers([...props.allPlayers, props.player])
			if(comPoint>playerPoint){
				props.setResul(`SORRY ${props.player.playerName} YOU LOSE`)
			}
			else{
				props.setResul(`CONGRATULATION ${props.player.playerName}  YOU WIN`)
			}
		}
	

		setIndex(index + 1)
		props.setMove(props.move - 1)


	}

	const moveBack = () => {
		

		if (props.compDeck[index-1].value > props.playerDeck[index-1].value) {
			setcomPoint(comPoint - 1)



		}
		else if (props.compDeck[index-1].value < props.playerDeck[index-1].value) {
			setPlayerPoint(playerPoint - 1)

		}
		else {
			setcomPoint(comPoint - 1)
			setPlayerPoint(playerPoint - 1)
		}

		if (props.move === 26) {
			props.setSwitchPages(0)
		}

		setIndex(index - 1)
		props.setMove(props.move + 1)
	}


	return (
		<div className='GamePage col'>
			<div className='Game'>
				<div className='col'>
					<h1 className='title COMP' >COMPUTER</h1>
					<button onClick={moveBack} className='next Btn'>PREVIEWS</button>
					<h1 className='title NAME'>{props.player.playerName}</h1>
				</div>
				<div className='col'>
					<Card chosenCard={props.compDeck[index]} />
					<Card chosenCard={props.playerDeck[index]} />
				</div>
				<div className='col'>
					<div className='compPoints title'>points {comPoint}</div>
					<button onClick={progres} className='next Btn'>NEXT</button>
					<div className='playerPoints title'>points {playerPoint}</div>
				</div>
			</div>

		</div>
	)
}
