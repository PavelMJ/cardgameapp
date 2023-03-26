import React, { useEffect } from 'react';
import { useState } from 'react';
// import data from '/data.json'
import './App.css';

import SignIn from './components/SignIn';
import GamePage from './components/GamePage'
import Score from './components/Score'




function App() {

	const [switchPages, setSwitchPages] = useState(0)
	const [player, setPlayer] = useState({})
	const [compDeck, setCompDeck] = useState([])
	const [playerDeck, setplayeDeck] = useState([])
	const [result, setResul] = useState(true)
	const [move, setMove] = useState(0)


	const [allPlayers, setAllPlayers] = useState([
	])
	useEffect(() => {
		fetch('/data.json')
			.then((responce) => responce.json())
			.then((data) => setAllPlayers(data))
			.catch((error) => console.error(error))
	}, [])

	const createPlayer = (userName) => {
		setPlayer({ playerName: userName, win: 0, lose: 0, games: 1 })
		createGame()
	}


	// useEffect(()=>{
	// 	setAllPlayers(data)
	// },[allPlayers])


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

		setMove(25)
		setplayeDeck([...playDeck])
		setCompDeck([...comDeck])
	}

	const goHome = () => {
		setSwitchPages(0)
	}


	const switchPage = () => {
		if (switchPages === 0) {

			return <SignIn setSwitchPages={setSwitchPages} createPlayer={createPlayer} playersData={allPlayers} />

		}
		else if (switchPages === 1) {
			return <GamePage
				setSwitchPages={setSwitchPages}
				player={player}
				setPlayer={setPlayer}
				compDeck={compDeck}
				playerDeck={playerDeck}
				allPlayers={allPlayers}
				setAllPlayers={setAllPlayers}
				result={result}
				setResul={setResul}
				move={move}
				setMove={setMove}
			/>

		}
		else if (switchPages === 2) {

			return <Score
				setSwitchPages={setSwitchPages}
				playersData={allPlayers}
				result={result}
				player={player}
				createGame={createGame}


			/>
		}
	}

	const showInfo = () => {
		if (switchPages === 0) {
			return <div className='info'>READY FOR <span style={{color:"red"}}>WAR</span> </div>
		}
		if (switchPages === 1) {

			return <div className='info'>Only {move} moves left</div> 
		}

		if (switchPages === 2) {
			if(result)
			return <div style={{color:"red",fontSize: "25px"}} className='info'>CONGRTULATION <span style={{fontSize: "35px", color: 'white'}}>{player.playerName}</span> YOU WON! </div>
			else{
				return <div style={{color:"red",fontSize: "25px"}} className='info'>SORRY <span style={{fontSize: "35px",color: 'white'}}>{player.playerName}</span> YOU LOST!</div>
			}
		}

	}



	return (
		<div className="App">

			<div className='Header'>

				<img onClick={goHome} className='homeBtn' style={{ margin: '10px', cursor: "pointer" }} src='/img/home.svg' alt="home" />
				{showInfo()}
				<h2 className='title'>@</h2>
			</div>

			{switchPage()}
		</div>
	);
}

export default App;
