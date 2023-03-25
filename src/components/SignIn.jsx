import React from 'react'
import { useState } from 'react'
import Table from './Table'

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
		<div className='conteiner move'>

			<div className='signIn' >
				<Table playersData={props.playersData} />
				<div className='enter' >
					<h1 style={{ fontSize: "30px", color: "#e84e43", position: 'relative', bottom: "60px" }}>LET'S PLAY</h1>
					<input className='nameInput' onChange={(e) => { setName(e.target.value) }} type="text" placeholder='enter your name' />
					<button className='start Btn' onClick={checkName}>START</button>
				</div>
			</div>
		</div>
	)
}
