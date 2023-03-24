import React from 'react'

export default function Table(props) {
	return (
		<div className='table'>
		<ul className='players'>
			<li>Player</li>
		{props.playersData.map((obj, index)=>(
			<li key={index}>{obj.playerName}</li>
		))}
	</ul>
	<ul className='players'>
			<li>Games</li>
		{props.playersData.map((obj, index)=>(
			<li className='data' key={index}>{obj.games}</li>
		))}
	</ul>

	<ul className='players'>
			<li>Wins</li>
		{props.playersData.map((obj, index)=>(
			<li className='data' key={index}>{obj.win}</li>
		))}
	</ul>

	<ul className='players'>
			<li>Loses</li>
		{props.playersData.map((obj, index)=>(
			<li className='data' key={index}>{obj.lose}</li>
		))}
	</ul>

	</div>
	)
}
