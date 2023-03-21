import React from 'react'
import { useState } from 'react'

export default function SignIn(props) {
	const [name, setName] =useState('')

	const checkName =()=>{
		if(name.length < 2){
			alert("too short!")
		}
		else{
			props.setSwitchPages(1)
			props.createPlayer(name)
		}
	}






	return (
		<div className='signIn'>
			<h1>READY FOR WAR</h1>
			
			<input className='nameInput' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='enter your name' />
			<button className='start Btn' onClick={checkName}>START</button>
		</div>
	)
}
