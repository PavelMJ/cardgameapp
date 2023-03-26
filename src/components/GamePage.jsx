import React, { useState } from 'react'
import Card from './Card'


export default function GamePage(props) {

	const [index, setIndex] = useState(0)
	const [comPoint, setcomPoint] = useState(0)
	const [playerPoint, setPlayerPoint] = useState(0)

	const progres = () => {
		setIndex(index + 1)
		props.setMove(props.move - 1)

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
			props.setMove(0)
			props.setSwitchPages(2)
			let temp =props.allPlayers.findIndex(val=> val.playerName===props.player.playerName)
			if(temp ===-1){
				props.setAllPlayers([...props.allPlayers, props.player])
			}
			else{
				let temp = props.allPlayers.map((val)=>{
					if(val.playerName===props.player.playerName){
						for(let i =1; i<val.length; i++){
							val[i]+=props.player[i]
						}
					}
					return val
				})
				props.setAllPlayers([...temp])
			}
		
			
			if (comPoint > playerPoint) {
				props.setResul(false)
			}
			else {
				props.setResul(true)
			}
		}





	}

	const moveBack = () => {
		if (index < 1) {
			return

		}


		if (props.compDeck[index - 1].value > props.playerDeck[index - 1].value & index > 0) {
			setcomPoint(comPoint - 1)



		}
		else if (props.compDeck[index - 1].value < props.playerDeck[index - 1].value & index > 0) {
			setPlayerPoint(playerPoint - 1)

		}
		else if (props.compDeck[index - 1].value === props.playerDeck[index - 1].value & index > 0) {
			setcomPoint(comPoint - 1)
			setPlayerPoint(playerPoint - 1)
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
