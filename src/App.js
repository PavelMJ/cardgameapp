import React from 'react';
import { useState } from 'react';
import './App.css';

import SignIn from './components/SignIn';
import GamePage from './components/GamePage'
import Score from './components/Score'




function App() {

	const [switchPages, setSwitchPages] = useState(0)
	const [player, setPlayer] = useState({})
	const [compDeck, setCompDeck] = useState([])
	const [playerDeck, setplayeDeck] = useState([])


	const createPlayer = (userName) => {
		setPlayer({ playerName: userName, win: 0, lose: 0, games: 1 })
		createGame()
	}
	const createGame = () => {

		let cardDeck = []

		let rankArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
		let suitArr = ['spades', 'hearts', 'clubs', 'diamonds']
		// let values = 1
		for (let i = 0; i < suitArr.length; i++) {
			for (let j = 0; j < rankArr.length; j++) {
				cardDeck.push({
					value: j + 1,
					suit: suitArr[i],
					rank: rankArr[j],
					image: `./card_Deck/${rankArr[j]}_of_${suitArr[i]}.png`
				})
			}

		}

		let rnd
		let comDeck = []
		let playDeck = []

		for (let i = 0; i < 26; i++) {
			rnd = Math.floor(Math.random() * cardDeck.length)
			comDeck.push(cardDeck[rnd])
			cardDeck.splice(rnd, 1)

			rnd = Math.floor(Math.random() * cardDeck.length)
			playDeck.push(cardDeck[rnd])
			cardDeck.splice(rnd, 1)

		}

		setplayeDeck([...playDeck])
		setCompDeck([...comDeck])
	}






	const switchPage = () => {
		if (switchPages === 0) {
			return <SignIn setSwitchPages={setSwitchPages} createPlayer={createPlayer} />

		}
		else if (switchPages === 1) {
			return <GamePage setSwitchPages={setSwitchPages} player={player} compDeck={compDeck} playerDeck={playerDeck} />

		}
		else if (switchPages === 3) {
			return <Score setSwitchPages={setSwitchPages} />
		}


	}

	return (
		<div className="App">
			{switchPage()}
		</div>
	);
}

export default App;
