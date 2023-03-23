import React from 'react'
import { useState } from 'react'

export default function SignIn(props) {
	const [name, setName] = useState('')

	const checkName = () => {
		if (name.length < 2) {
			alert("too short!")
		}
		else {
			props.setSwitchPages(1)
			props.createPlayer(name)
			// props.saveJson(props.allPlayers,'./data/data.json')

		}
	}

	console.log(props);






	return (
		<div className='conteiner'>
			<div className='table'>
				<ul className='players'>
					<li>Player</li>
				{props.playersData.map((obj, index)=>(
					<li key={index}>{obj.playerName}</li>
				))}
			</ul>

			</div>
			<div className='signIn' >
				<h1>READY FOR WAR</h1>
				<input className='nameInput' onChange={(e) => { setName(e.target.value) }} type="text" placeholder='enter your name' />
				<button className='start Btn' onClick={checkName}>START</button>
			</div>
		</div>
	)
}
